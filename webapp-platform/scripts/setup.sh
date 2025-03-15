#!/bin/bash

# This script sets up the development environment for the webapp platform.

# Update package list and install necessary packages
echo "Updating package list..."
sudo apt update

echo "Installing Node.js, npm, and other dependencies..."
sudo apt install -y nodejs npm

# Install Yarn package manager
echo "Installing Yarn..."
npm install --global yarn

# Install project dependencies
echo "Installing project dependencies..."
yarn install

# Set up environment variables
echo "Setting up environment variables..."
cp .env.example .env

# Run any additional setup commands here
echo "Running additional setup commands..."

echo "Setup complete!"