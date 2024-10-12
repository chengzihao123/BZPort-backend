const admin = require("firebase-admin");
const serviceAccount = require("./bzport-2024-firebase-adminsdk-6w6uk-60fdaec621.json");

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Firestore instance
const db = admin.firestore();

// Seed function to add mock data
const seedData = async () => {
  try {
    const usersCollection = db.collection("users");

    // Mock data
    const mockUsers = [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
      { name: "Charlie", age: 28 },
    ];

    // Add mock data to Firestore
    for (const user of mockUsers) {
      await usersCollection.add(user);
    }

    console.log("Mock data successfully added!");
  } catch (error) {
    console.error("Error adding mock data:", error);
  }
};

// Run the seed function
seedData().then(() => process.exit());
