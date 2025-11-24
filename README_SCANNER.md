# AV Sync – Local Network Scanner Utility

A standalone utility for scanning local network devices and sending them directly to the AV Sync backend for inventory storage. This saves each scan under the correct user account, ensuring devices are grouped and stored per individual user.

This tool is designed for beta testers, production teams, and technical users who need fast, automated device discovery.

---

## Overview

**Platform Support:**

- macOS: Fully supported
- Windows: Auto-run script included; still pending hardware testing
- Linux: Coming soon

**The AV Sync Scanner:**

- Discovers devices on the **user’s local network**
- Collects **IP** and **MAC Addresses**
- Automatically POSTs device data to the deployed AV Sync API (backend hosted on Render)
- Works on **Mac**
- Windows + Linux versions included but still under testing
- Requires **zero configuration**, only Node.js installed

## Folder Contents

This folder includes the scripts and utilities used to run the scanner both manually and automatically.

---

| File Name            | Brief Description                                                  |
| -------------------- | ------------------------------------------------------------------ |
| `avsync-scanner.js`  | Main scanner script using `local-devices` + Axios                  |
| `run-scanner.sh`     | Auto-installer + auto-run script for Mac/Linux                     |
| `run-scanner.bat`    | Auto-installer + auto-run script for Windows (still under testing) |
| `README_SCANNER.txt` | User-friendly installation/run instructions (for ZIP download)     |
| `README_SCANNER.md`  | This developer-focused documentation file                          |

## Requirements

- **Node.js v18+ recommended**
- Internet connection: for posting results to AV Sync backend
- The user must be connected to the same local network as the AV equipment/devices being scanned

## Installation | Developer Version

Clone this repo or navigate into the scanner folder.

Install dependencies:

```bash
npm install
```

Run the scanner manually:

```bash
node avsync-scanner.js
```

## Running the Auto-Scripts

Mac / Linux

```bash
sh run-scanner.sh
```

Windows

```bash
run-scanner.bat
```

These scripts automatically:

- Install necessary dependencies (local-devices+axios)
- Run the scanner
- Automatically upload all devices to your AV Sync backend database

## Beginner-Friendly Instructions (macOS) — Easiest Method

Follow these simple steps to run the AV Sync Local Scanner:

1. Open Terminal
2. Type the cd command and add a space after:

   ```bash
   cd
   ```

3. Drag the Scanner Folder into Terminal

- click and drag the: **AVSync-LocalScanner-Release** into the terminal window.
- Terminal will automatically insert the full folder path for your.
  Example:
  ```bash
  cd /Users/.../Desktop/AVSync-LocalScanner-Release
  ```

4. Press Enter.
5. Run the **Mac/Linux** Auto-Scripts to start the local Scanner
   ```bash
   sh run-scanner.sh
   ```
6. Enter Your User UID:

- You'll see a prompt like:

```bash
 Enter your AV Sync UID:
```

- Go to your AV Sync Web App > **Settings** > copy your **UID**
- Paste into the Terminal

7. Press Enter to Start the Scan

## Notes for macOS Users

Double-clicking run-scanner.sh may open the file in a text editor instead of running it.

If that happens, simply follow the steps above instead.
These steps guarantee the scanner runs correctly.

## Sample Output

A sample output of local scanner

```bash
🔍 AV Sync — Local Network Scan Started
✨ Devices Found: 12

📡 Sent → HP Printer (192.168.1.22)
📡 Sent → Apple-TV (192.168.1.41)
📡 Sent → Unnamed Device (192.168.1.90)

✅ Scan Complete! Device data successfully uploaded.
```

## Backend Endpoint

The scanner posts device data to deployed database:

```bash
https://avsync-scanner-peruser.onrender.com/api/v1/devices
```

## Security Notes

- The scanner does not open ports or access device configurations
- Only discovers IP + MAC like a standard network discovery tool
- All data/traffic are sent securely to the backend via HTTPS

## Packaging for Distribution

When exporting this tool for end-users:

**Include ONLY:**

- avsync-scanner.js
- run-scanner.sh
- run-scanner.bat
- README_SCANNER.txt

**Make sure to exclude:**

- README_SCANNER.md (developer-only)

---

## Author

Savannah Chanel Victoria
AV Sync – Capstone Project
Full Sail University

---

## License

This tool is for educational and project use.
Redistribution allowed only with permission of the author.
