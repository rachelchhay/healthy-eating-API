const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

 // Controller
 const postsController = require('./controllers/posts.js');
 app.use('/posts', postsController);

// Database
mongoose.Promise = global.Promise;
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/healthy_eating'

mongoose.connect(mongoUri, {useMongoClient: true});
mongoose.connection.once('open', () => {
  console.log('***** Connected to MongoDB *****');
})

const port = process.env.PORT || 3001;


app.listen(port, () => {
  console.log('===================================');
  console.log('Server running on port: ' + port);
  console.log('===================================');
})
