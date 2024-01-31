#!/usr/bin/node
const fs = require('fs');

// Checking if the correct number of command-line arguments are provided
if (process.argv.length !== 5) {
  console.error('Usage: ./102-concat.js fileA fileB fileC');
  process.exit(1);
}

const fileAPath = process.argv[2];
const fileBPath = process.argv[3];
const fileCPath = process.argv[4];

// Reading the content of the first file
fs.readFile(fileAPath, 'utf8', (errA, dataA) => {
  if (errA) {
    console.error(`Error reading ${fileAPath}: ${errA.message}`);
    process.exit(1);
  }

  // Reading the content of the second file
  fs.readFile(fileBPath, 'utf8', (errB, dataB) => {
    if (errB) {
      console.error(`Error reading ${fileBPath}: ${errB.message}`);
      process.exit(1);
    }

    // Concatenating the contents of the two files
    const concatenatedContent = dataA + dataB;

    // Writing the concatenated content to the destination file
    fs.writeFile(fileCPath, concatenatedContent, 'utf8', (errWrite) => {
      if (errWrite) {
        console.error(`Error writing to ${fileCPath}: ${errWrite.message}`);
        process.exit(1);
      }

      console.log(`${fileAPath} and ${fileBPath} successfully concatenated to ${fileCPath}`);
    });
  });
});

