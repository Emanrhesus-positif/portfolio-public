/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const authRoutes = require('./routes/user');
const projectRoutes = require('./routes/project');
const { sendFormDataInMail } = require('./controllers/mail');
require('dotenv').config();

const app = express();

//BDD connection
mongoose.connect(
  process.env.DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
)
.then(() => console.log('Connexion à BDD réussie !'))
.catch(() => console.log('Connexion à BDD échouée !' + process.env.DB_SECURE_URL));

//Static files
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Access control origin passthough
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//Routes
app.use('/api/projects', projectRoutes);
app.use('/api/auth', authRoutes);
app.post('/api/mail', sendFormDataInMail);

app.use((req, res) => {
  res.json({ message: 'Votre requête a bien été reçue !' });
});

module.exports = app;
