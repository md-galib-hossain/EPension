// external imports
const express = require("express");
const dotenv = require("dotenv").config();
const cookieParser = require('cookie-parser')
const cors = require('cors');
const mongoose = require('mongoose');


// internal imports
const DataBaseConfiguration = require("./config/database");
const userRoute = require("./routes/userRoute");
const PensionFormRoute = require("./routes/PensionFormRoute");
const JuniorOfficerRoute = require("./routes/JuniorOfficerRoute");
const HeadOfficerRoute = require("./routes/HeadOfficerRoute");
const AssistantGeneral = require("./routes/AssistantGeneralRoute");


// config calling.
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.use(
//     cors({
//         // origin: ["http://localhost:3000", "https://pinvent-app.vercel.app"],
//         origin: ["http://localhost:3000", "http://localhost:5000"],
//         credentials: true,
//     })
// );


// database Connection
DataBaseConfiguration();

// response parses 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// listing home route.
app.get('/', (req, res) => {
    res.send("Welcome to Home Page of Backend");
})


// Routings
app.use('/', PensionFormRoute);
app.use('/', AssistantGeneral);
app.use('/', JuniorOfficerRoute);
app.use('/', HeadOfficerRoute);
app.use('/', userRoute);




// Create an API endpoint to get all data from the "govtdatabase" collection
app.get('/govtdata', async (req, res) => {
    try {
      // If you have a schema, you can use the model to fetch data
      // const govtData = await GovtData.find({});
  
      // If you don't have a schema, you can directly access the collection like this:
      const govtData = await mongoose.connection.collection('govtdatabase').find({}).toArray();
  
      // Send the data as a JSON response
      res.json(govtData);
    } catch (err) {
      console.error('Error fetching data:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });



// 404 page error handling.
const notFoundPage = (req, res, next) => {
    next(res.status(500).json("Page not Found!"))
}
app.use(notFoundPage);

// Default | Server | Programmer Common error handling....
// app.use(errorsMiddleware);


// app listing
const server = app.listen(process.env.PORT || 8001, () => {
    console.log(`App listing on ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})


// Handling Error
process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))
})