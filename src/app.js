const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models');
const config = require('./config/config');
const helmet = require('helmet')

const app = express();
app.use(morgan('combined'));
app.use(express.json())
app.use(cors());
app.use(helmet());

require('./route',)(app);

sequelize.sync()
   .then(() => {
      app.listen(config.port);
   });

