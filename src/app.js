const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models');
const config = require('./config/config');

const app = express();
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

require('./route',)(app);

sequelize.sync()
   .then(() => {
      app.listen(config.port);
      console.log(`server started on ${config.port}`);
   });

