
var admin = require("firebase-admin");

var serviceAccount = require("./mywork-5a612-firebase-adminsdk-y39oy-3e0b7ec8e2.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mywork-5a612-default-rtdb.europe-west1.firebasedatabase.app"
});


module.exports.admin = admin 