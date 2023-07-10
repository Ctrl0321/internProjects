// Import the required MongoDB modules
const { log } = require('console');
const { MongoClient } = require('mongodb');

// Connection localhost
const localhost = 'mongodb://127.0.0.1:27017';

// Database name
const dbName = 'hsenidMobile';

// Collection (table) name
const collectionName = 'employee';


// Function to add employees for database
async function addEmployee() {
    try {
      // Create a new MongoDB client
      const client = new MongoClient(localhost);
  
      // Connect to the MongoDB server
      await client.connect();
  
      // Access the hsenid database
      const db = client.db(dbName);
  
      // Create the employee collection with the specified columns
      await db.collectionName.insertOne({
        "first_name":"Aathiq"
      })
      console.log("added to database")
  
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  addEmployee();