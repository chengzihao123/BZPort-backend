const fs = require("fs");
const db = require("./firebase-config"); // Import Firestore instance from firebase-config.js
const { collection, getDocs } = require("firebase/firestore");

const exportFirestoreData = async () => {
  try {
    const nodesCollection = db.collection("nodes"); // Replace with your collection name
    const snapshot = await getDocs(nodesCollection);

    const data = [];
    snapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    // Convert data to JSON and write to a file
    fs.writeFileSync("firestore-data.json", JSON.stringify(data, null, 2));

    console.log("Data has been exported to firestore-data.json");
  } catch (error) {
    console.error("Error exporting data:", error);
  }
};

// Run the export function
exportFirestoreData();
