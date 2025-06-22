const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/portfolio', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema and model for storing form data
const portfolioSchema = new mongoose.Schema({
  fullName: String,
  job: String,
  jobDescription: String,
  otherJobs: String,
  college: String,
  features: [String],
  profileImage: String,
  halfImage: String,
  degrees: [{
    degree: String,
    graduationDate: String,
    college: String,
    online: Boolean
  }],
  contact: {
    email: String,
    phoneNumber: String,
    instagram: String,
    twitter: String,
    linkedin: String,
    location: String,
    address: String
  },
  works: {
    photos: [String],
    videos: [String]
  }
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Endpoint to handle form submission
app.post('/submit', upload.fields([{ name: 'profileImage' }, { name: 'halfImage' }, { name: 'photos' }, { name: 'videos' }]), async (req, res) => {
  try {
    const formData = {
      fullName: req.body.fullName,
      job: req.body.job,
      jobDescription: req.body.jobDescription,
      otherJobs: req.body.otherJobs,
      college: req.body.college,
      features: [req.body.feature1, req.body.feature2, req.body.feature3],
      profileImage: req.files['profileImage'] ? req.files['profileImage'][0].path : '',
      halfImage: req.files['halfImage'] ? req.files['halfImage'][0].path : '',
      degrees: JSON.parse(req.body.degrees), // Make sure to send degrees as JSON string
      contact: {
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        instagram: req.body.instagram,
        twitter: req.body.twitter,
        linkedin: req.body.linkedin,
        location: req.body.location,
        address: req.body.address
      },
      works: {
        photos: req.files['photos'] ? req.files['photos'].map(file => file.path) : [],
        videos: req.files['videos'] ? req.files['videos'].map(file => file.path) : []
      }
    };

    const newPortfolio = new Portfolio(formData);
    await newPortfolio.save();

    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting form', error });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
