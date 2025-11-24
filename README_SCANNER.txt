=========================================================
AV SYNC – LOCAL NETWORK SCANNER UTILITY
=========================================================

This README_SCANNER is in .txt format to guarantee readability on
every operating system (Mac, Windows, Linux) and to avoid formatting
issues that may occur with Markdown (.md) files.

This tool allows you to scan your local network and automatically
upload discovered devices to the AV Sync backend database for
inventory tracking.

---------------------------------------------------------
PLATFORM SUPPORT
---------------------------------------------------------
- macOS: Fully supported
- Windows: Script included; functionality pending hardware testing
- Linux: Support coming soon

---------------------------------------------------------
REQUIREMENTS
---------------------------------------------------------
- Node.js v18 or higher
- Internet connection
- Device must be connected to the same local network as your AV
  equipment and production devices

---------------------------------------------------------
HOW TO RUN (MAC / LINUX)
---------------------------------------------------------
1. Open Terminal
2. Navigate into the unzipped folder:
   > cd avsync-scanner
3. Run:
   > sh run-scanner.sh

This will automatically:
- Install required dependencies
- Run the local scanner
- Upload all device data to your AV Sync backend

---------------------------------------------------------
HOW TO RUN (WINDOWS)
---------------------------------------------------------
1. Open Command Prompt
2. Navigate into the extracted folder:
   cd avsync-scanner
3. Run:
   run-scanner.bat

This will automatically:

- Install dependencies
- Execute the scanner
- Upload device data to the AV Sync database

---------------------------------------------------------
Beginner-Friendly Instructions (macOS) — Easiest Method
---------------------------------------------------------
Follow these simple steps to run the AV Sync Local Scanner:

1. Open Terminal

2. Type the following command and a space afterwards:
    > cd_space_

3.Drag the Scanner Folder into Terminal
    - click and drag the: AVSync-LocalScanner-Release into the terminal window.
    - Terminal will automatically insert the full folder path for your.
  Example:  cd /Users/.../Desktop/AVSync-LocalScanner-Release

4. Press Enter.

5. Run the Mac/Linux Auto-Scripts to start the local Scanner
    >  sh run-scanner.sh

6. Enter Your User UID:
    - you'll see a prompt like: 
    >  Enter your AV Sync UID:
    - Go to your AV Sync Web App > Settings > copy your UID
    - Paste into the Terminal
7. Press Enter to Start the Scan

---------------------------------------------------------
BACKEND ENDPOINT
---------------------------------------------------------
All devices will be posted to:

https://avsync-scanner-peruser.onrender.com/api/v1/devices

---------------------------------------------------------
FILES INCLUDED IN THIS ZIP
---------------------------------------------------------
- avsync-scanner.js 
    > Main scanner script

- run-scanner.sh
    > Auto-run script for macOS / Linux

- run-scanner.bat
    > Auto-run script for Windows

- README_SCANNER.txt
    > This instruction document

---------------------------------------------------------
NOTES
---------------------------------------------------------
- The scanner does NOT open ports or modify device settings.
- The scanner ONLY detects IP and MAC addresses on the
  local network.
- All data is transmitted securely over HTTPS.

---------------------------------------------------------
SUPPORT
---------------------------------------------------------
For questions or troubleshooting, refer to the main AV Sync project 
handoff packet or GitHub repository.

---------------------------------------------------------
AUTHOR
---------------------------------------------------------
Savannah Chanel Victoria
AV Sync – Capstone Project
Full Sail University