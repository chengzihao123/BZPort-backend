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
    const nodesCollection = db.collection("nodes");
    const mockNodes = [
      {
        name: "DALIAN CONTAINER TERMINAL",
        Country: "China",
        Continent: "Asia",
        Location: [39.006840503487346, 121.89755564087916],
        type: "Port",
      },
      {
        name: "FUZHOU CONTAINER TERMINALS",
        Country: "China",
        Continent: "Asia",
        Location: [26.004294138728714, 119.47901382347108],
        type: "Port",
      },
      {
        name: "GUANGZHOU CONTAINER TERMINAL",
        Country: "China",
        Continent: "Asia",
        Location: [23.05675611279467, 113.52911162044033],
        type: "Port",
      },
      {
        name: "TIANJIN TERMINALS",
        Country: "China",
        Continent: "Asia",
        Location: [39.00645288315376, 117.80439556959625],
        type: "Port",
      },
      {
        name: "LYG-PSA CONTAINER TERMINAL",
        Country: "China",
        Continent: "Asia",
        Location: [34.730812863793645, 119.45739624351526],
        type: "Port",
      },
      {
        name: "BEIBU-GULF INTERNATIONAL CONTAINER TERMINAL",
        Country: "China",
        Continent: "Asia",
        Location: [21.719195113664277, 108.59959133805964],
        type: "Port",
      },
      {
        name: "SHANGHAI PUDONG INTERNATIONAL AIRPORT",
        Country: "China",
        Continent: "Asia",
        Location: [31.147631793351803, 121.80820951563337],
        type: "Air",
      },
      {
        name: "HONG KONG INTERNATIONAL AIRPORT",
        Country: "China",
        Continent: "Asia",
        Location: [22.313820300511164, 113.91383497085559],
        type: "Air",
      },
      {
        name: "PSA SICAL",
        Country: "India",
        Continent: "Asia",
        Location: [8.748731007378185, 78.21661912819918],
        type: "Port",
      },
      {
        name: "SAUDI GLOBAL PORTS",
        Country: "Saudi Arabia",
        Continent: "Asia",
        Location: [26.505396423216485, 50.188567679826726],
        type: "Port",
      },
      {
        name: "PSA ANTWERP",
        Country: "Belgium",
        Continent: "Europe",
        Location: [51.230170164024315, 4.411345362442847],
        type: "Port",
      },
      {
        name: "PSA ZEEBRUGGE",
        Country: "Belgium",
        Continent: "Europe",
        Location: [51.349798938829665, 3.174049320251271],
        type: "Port",
      },
      {
        name: "PSA GENOVA PRA'",
        Country: "Italy",
        Continent: "Europe",
        Location: [44.42754686874388, 8.764490711381717],
        type: "Port",
      },
      {
        name: "PSA VENICE'",
        Country: "Italy",
        Continent: "Europe",
        Location: [45.45871762181967, 12.245100734469952],
        type: "Port",
      },
      {
        name: "PSA SECH'",
        Country: "Italy",
        Continent: "Europe",
        Location: [44.4061246227076, 8.910770166311455],
        type: "Port",
      },
      {
        name: "PSA SINES'",
        Country: "Portugal",
        Continent: "Europe",
        Location: [37.938626291893186, -8.844237016494649],
        type: "Port",
      },
      {
        name: "MERSIN INTERNATIONAL PORT'",
        Country: "Turkey",
        Continent: "Europe",
        Location: [36.805130396301934, 34.64965247196114],
        type: "Port",
      },
      {
        name: "BALTIC HUB'",
        Country: "Poland",
        Continent: "Europe",
        Location: [54.38678743122502, 18.71902834321471],
        type: "Port",
      },
      {
        name: "AMSTERDAM AIRPORT SCHIPHOL'",
        Country: "Netherlands",
        Continent: "Europe",
        Location: [52.319886414771716, 4.745747950469748],
        type: "Air",
      },
      {
        name: "FRANKFURT AIRPORT'",
        Country: "Germany",
        Continent: "Europe",
        Location: [50.03642399737039, 8.55242610562375],
        type: "Air",
      },
      {
        name: "PSA PENN TERMINALS'",
        Country: "USA",
        Continent: "North America",
        Location: [39.85462769594184, -75.33927260214918],
        type: "Port",
      },
      {
        name: "CHICAGO O'HARE INTERNATIONAL AIRPORT'",
        Country: "USA",
        Continent: "North America",
        Location: [41.98095729153035, -87.90794603118262],
        type: "Air",
      },
      {
        name: "JOHN F. KENNEDY INTERNATIONAL AIRPORT'",
        Country: "USA",
        Continent: "North America",
        Location: [40.64490528667222, -73.77897112691453],
        type: "Air",
      },
      {
        name: "GEORGE BUSH INTERCONTINENTAL AIRPORT'",
        Country: "USA",
        Continent: "North America",
        Location: [29.99339021180615, -95.34016324901785],
        type: "Air",
      },
      {
        name: "HARTSFIELD-JACKSON ATLANTA INTERNATIONAL AIRPORT'",
        Country: "USA",
        Continent: "North America",
        Location: [33.6331103493417, -84.43147687696272],
        type: "Air",
      },
      {
        name: "LOS ANGELES INTERNATIONAL AIRPORT'",
        Country: "USA",
        Continent: "North America",
        Location: [33.94271593633069, -118.40322852401918],
        type: "Air",
      },
      {
        name: "MIAMI INTERNATIONAL AIRPORT'",
        Country: "USA",
        Continent: "North America",
        Location: [25.7929649191893, -80.28107254982515],
        type: "Air",
      },
    ];

    // Add mock data to Firestore
    for (const node of mockNodes) {
      await nodesCollection.add(node);
    }

    console.log("Mock nodes successfully added!");
  } catch (error) {
    console.error("Error adding mock nodes:", error);
  }
};

// Run the seed function
seedData().then(() => process.exit());
