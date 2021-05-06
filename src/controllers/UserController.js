const {User} = require('../models')

const jwt = require('jsonwebtoken');
const config = require('../config/config');

function jwtSignUser(user) {
   const ONE_WEEK = 60 * 60 * 24 * 7;
   return jwt.sign(user, config.authentication.jwtSecret, {
      expiresIn: ONE_WEEK
   });
}

module.exports = {
   // update this function
   async register(req, res) {
      try {
         const user = await User.create(req.body);
         const userJson = user.toJSON();
         res.send({
            user: userJson,
            token: jwtSignUser(userJson)
         });
      } catch {
         res.status(400).send(
             {
                error: `This email account is already in use`
             })
      }
   },
   async login(req, res) {
      try {
         const {email, password} = req.body;
         const user = await User.findOne({
            where: {
               email: email
            }
         });
         if (!user)
            res.status(403).send({
               error: `The login information was incorrect`
            });
         const isPassValid = await user.comparePassword(password);
         if (!isPassValid)
            res.status(403).send({
               error: `The login information was incorrect`
            });
         const userJson = user.toJSON();
         res.send({
            user: userJson,
            token: jwtSignUser(userJson)
         });
      } catch (error) {
         res.status(500).send({
            error: `An error occurred while trying to log in`
         })
      }
   }
}