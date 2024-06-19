const path = require('path');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 3000;
var cors = require('cors');

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/spot', require('./api/spot/spotRoutes'));
app.use('/api/email', require('./api/email/emailRoutes'));

// Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('public'));
  app.get('/**', (req, res) => {
    res.sendFile(
      path.join(__dirname, 'public', 'index.html')
    );
  });
}
console.log(`Backend Environment: ${process.env.NODE_ENV}`);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));