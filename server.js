// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection string
// Replace with your actual connection string
const mongoDB = 'your_mongodb_connection_string';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Define the schema for the beta users
const betaUserSchema = new mongoose.Schema({
    walletAddress: String,
    username: String,
    email: String,
    twitterHandle: String
});

// Create a model for the schema
const BetaUser = mongoose.model('BetaUser', betaUserSchema);

// Route to handle form submission
app.post('/submit-form', (req, res) => {
    const newUser = new BetaUser(req.body);
    newUser.save()
        .then(item => res.send("Data saved to database"))
        .catch(err => res.status(400).send("Unable to save data"));
});

// Serve static files
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
