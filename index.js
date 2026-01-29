const express = require('express');
const app = express();
const mongoose = require('mongoose');
const url = 'mongodb+srv://mohammedelalimy:node_231@learnmongodb.vpmrjfd.mongodb.net/Elalimy_DB?appName=learnmongodb'
mongoose.connect(url).then('Connected to MongoDB');

app.use(express.json());

app.use('/api/courses', require('./Routes/Courses.routes'));

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});