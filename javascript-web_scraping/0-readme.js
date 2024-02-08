<<<<<<< HEAD
#!/usr/bin/node
const fs = require('fs');
const filePath = process.argv[2];
if (!filePath) {
  console.error('Please provide a file path as an argument');
  process.exit(1);
}
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
=======
t fs = require('fs');
const filePath = process.argv[2];
if (!filePath) {
	  console.error('Please provide a file path as an argument');
	  process.exit(1);
}
fs.readFile(filePath, 'utf-8', (err, data) => {
	  if (err) {
		      console.error(err);
		    } else {
			        console.log(data);
			      }
>>>>>>> 2e0b19be210e0778dca7e9ac9cf03c605ce8f27d
}
);
