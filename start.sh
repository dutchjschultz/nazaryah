#!/bin/bash

# Nazaryah Development Server Startup Script

cd "$(dirname "$0")"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Start the development server
echo "Starting Nazaryah on http://localhost:4321"
npm run dev
