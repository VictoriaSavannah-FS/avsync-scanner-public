// /**Updated Scan.js from original avsync-server to use with this new local-scanner utilitiy file
//  * ----
//  * USer will downlaod this seperate utility file at login to able to use the Scanner feature of the app ---
//  * will now scan the users' local network and send data back to the expo app to display @ frontend
//  *
//  * -----------------------------------------
//  * Original scan.js file:  implementing "local-devices" to fetch local network device data ONLY
//  * -----------------------------------------
//  * Keeping fallback name - so users' can still track their unnamed devices and they still have the ability to update thier device names with the Edit modal from the front-end
//  * ----------------------------
//  * Flow: scanner discovwers local devices -> sneds to deployed backend via express API endpoint --> store @ db --> fetch frm frontend
//  *
//  */

const find = require("local-devices");
const axios = require("axios");
const readline = require("readline");

// Backend endpoint ----
const API_URL = "https://avsync-scanner-peruser.onrender.com/api/v1/devices";

// Prompt >> user for UID
function askForUID() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Enter your AV Sync UID: ", (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

// Main scanner logic ----
async function runScan() {
  console.log("\n🔍 Starting AV Sync Local Network Scan...\n");

  // 11.21 udapte: Ask user for UID --
  const USER_ID = await askForUID();

  if (!USER_ID) {
    console.log("❌ No UID entered. Exiting...");
    return;
  }
  // log ---userUID
  console.log(`\n📌 Using UID: ${USER_ID}\n`);

  try {
    console.log("💻 Fetching existing devices for this user...");
    const currentDbRes = await axios.get(`${API_URL}?userId=${USER_ID}`);
    const existingDevices = currentDbRes.data || [];

    // same lgoic ---- rest is the same ----
    /**cehck forcurernt devicesANems FI exist + start DEvUn.:XX from the last /Max # --- */
    const existingNumbers = existingDevices
      .map((d) => {
        if (d.deviceName?.startsWith("Unnamed Device:")) {
          const num = parseInt(d.deviceName.replace("Unnamed Device: ", ""));
          return isNaN(num) ? null : num;
        }
        return null;
      })
      .filter(Boolean);
    // sart from teh laast (biuggest 3) adn go from tehre --
    let unnamedCount =
      existingNumbers.length > 0 ? Math.max(...existingNumbers) : 0;

    const devices = await find();
    console.log(`🔎 Found ${devices.length} device(s).\n`);

    for (const device of devices) {
      let deviceName =
        device.name && device.name.trim() !== "" && device.name !== "?"
          ? device.name
          : `Unnamed Device: ${++unnamedCount}`;

      const payload = {
        userId: USER_ID,
        deviceName,
        ip: device.ip,
        mac: device.mac,
        make: "Make Unknown",
        model: "Model Unknown",
        firmwareVersion: "",
        serialNum: "",
        location: "",
        room: "",
        group: "Unassigned",
        notes: "",
        status: "Online",
        schedule: "Quarterly",
        lastChecked: new Date(),
        reminderDate: null,
        reminderSent: false,
      };

      try {
        await axios.post(API_URL, payload);
        console.log(`✅ Saved: ${payload.ip} (${payload.deviceName})`);
      } catch (err) {
        if (err.response && err.response.status === 400) {
          console.log(`⚠️ Skipped duplicate: ${payload.ip}`);
        } else {
          console.log(`❌ Error saving ${payload.ip}:`, err.message);
        }
      }
    }

    console.log("\n🎉 Scan Complete!");
  } catch (error) {
    console.error("❌ Scan error:", error.message);
  }
}

runScan();
