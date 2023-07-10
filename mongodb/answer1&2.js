// Import the required MongoDB modules
const { MongoClient } = require('mongodb');

// Connection localhost
const localhost = 'mongodb://127.0.0.1:27017';

// Database name
const dbName = 'hsenidMobile';

// Collection (table) name
const collectionName = 'employee';

// Column names
const columnNames = [
  'employee_id',
  'first_name',
  'last_name',
  'age',
  'gender',
  'designation',
  'address',
  'email',
  'mobile_number',
  'department_id',
  'faction_id',
  'sbu_id',
  'last_modified_date'
];

// Function to create the database and collection
async function createDatabaseAndCollection() {
  try {
    // Create a new MongoDB client
    const client = new MongoClient(localhost);

    // Connect to the MongoDB server
    await client.connect();

    // Access the hsenid database
    const db = client.db(dbName);

    // Create the employee collection with the specified columns
    await db.createCollection(collectionName);

  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Call the function to create the database and collection
createDatabaseAndCollection();


