const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

require('dotenv').config();
const evaluationRoutes = require('./routes/evaluation');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

// Use imported routes
app.use('/api', evaluationRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
