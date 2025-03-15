const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Define the build function
function build() {
    console.log('Starting the build process...');

    // Define the output directory
    const outputDir = path.resolve(__dirname, '../dist');

    // Clean the output directory
    fs.rmSync(outputDir, { recursive: true, force: true });
    fs.mkdirSync(outputDir);

    // Execute the build command
    exec('tsc', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error during build: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Build stderr: ${stderr}`);
            return;
        }
        console.log(`Build stdout: ${stdout}`);
        console.log('Build process completed successfully.');
    });
}

// Run the build function
build();