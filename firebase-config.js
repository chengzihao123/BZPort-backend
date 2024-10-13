const admin = require("firebase-admin");
const fs = require("fs");

// Path to your Firebase service account key JSON file
const serviceAccount = require("./bzport-2024-firebase-adminsdk-6w6uk-60fdaec621.json");

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Firestore reference
const db = admin.firestore();

const exportFirestoreData = async () => {
  try {
    const nodesCollection = db.collection("nodes"); // Replace with your collection name
    const snapshot = await nodesCollection.get(); // Use Admin SDK to get documents

    const data = [];
    snapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    // Write data to JSON file
    fs.writeFileSync("firestore-data.json", JSON.stringify(data, null, 2));

    console.log("Data has been exported to firestore-data.json");
  } catch (error) {
    console.error("Error exporting data:", error);
  }
};

// Run the export function
exportFirestoreData();
