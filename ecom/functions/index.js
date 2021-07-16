const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IwqF9SHkQcZYdNY8n2nvpodyOExlsn3a75rOhOO5XLxF8Iz3AlhnBqVDrb2iKIC86yGcAL5eAq5QvTqxdkSIJsP00YbPuBQpA"
);
//API

//-API config
const app = express();

//-middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello"));
app.post("/payment/create", async (request, response) => {
  const total = request.query.tool;
  console.log("Payment received>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  //ok-created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen command
exports.api = functions.https.onRequest(app);
//app.listen(5000);
//example endpoint
//http://localhost:5001/ecom-8d88a/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
