const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

module.exports = {
   port: process.env.PORT,
   db: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      options: {
         dialect: process.env.DIALECT,
         host: process.env.HOST
      }
   },
   authentication: {
      jwtSecret: process.env.JWT_SECRET || 'secret'
   }
};