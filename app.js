const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
const port = 3001;

dotenv.config();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const Post = require('./models/post');

app.use('/', require('./routes/index'));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port} or http://127.0.0.1:${port}`);
});
