 const fs = require('fs');
const QuickDB = require('quick.db');

const client = require('../main.js');


client.on("ready", () => {

// Instantiate the Quick.db const QuickDB = require('quick.db');

// Instantiate the Quick.db instance


// Get all the keys in Quick.db
//const keys = QuickDB.all().map((entry) => entry.ID);

// Clear the data by deleting each key
//keys.forEach((key) => {
 // QuickDB.delete(key);
//});

//console.log('Quick.db data has been cleared.');
// Reset or clear the data in Quick.db


// Get all the data from Quick.db
const data = QuickDB.all();

// Convert the data to JSON string
const jsonData = JSON.stringify(data, null, 2);

// Specify the file path to save the JSON data
const filePath = 'quick.json';

// Write the JSON data to the file
fs.writeFile(filePath, jsonData, (err) => {
  if (err) {
    console.error('Error saving Quick.db data:', err);
  } else {
    console.log('Quick.db data saved successfully!');
  }
});
})