#!/bin/bash

echo ""
echo "Preparing AV Sync Scanner..."
echo ""

# Install dependencies locally @ this folder ---
npm install local-devices axios --silent

echo ""
echo "🚀 Running Network Scanner..."
echo ""

# Run the scanner ---
node avsync-scanner.js