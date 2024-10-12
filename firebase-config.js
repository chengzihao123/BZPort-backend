const admin = require("firebase-admin");
const serviceAccount = require("./bzport-2024-firebase-adminsdk-6w6uk-60fdaec621.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;
