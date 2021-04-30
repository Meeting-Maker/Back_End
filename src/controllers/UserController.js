const {User, MeetingMember} = require('../models')

const jwt = require('jsonwebtoken');
const config = require('../config/config');

function jwtSignUser(user) {
   const ONE_WEEK = 60 * 60 * 24 * 7;
   return jwt.sign(user, config.authentication.jwtSecret, {
      expiresIn: ONE_WEEK
   });
}

module.exports = {
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
         console.log(req.body);
         const {email, password} = req.body;
         const user = await User.findOne({
            where: {
               email: email,
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
         console.log(error)
         res.status(500).send({
            error: `An error occurred while trying to log in`
         })
      }
   },
   async getUser(req, res) {
      try {
         const userid = await MeetingMember.findAll({
            attributes: ['user_id', 'role'],
            where: {
               meetingID: req.query.meetingID
            }
         });

         const name = [];
         for (const i in userid) {
             name.push(await User.findOne({
               attributes: ['name'],
               where: {
                  id: userid[i].userID
               }
            }));
             console.log(userid[i].userID);
         }
         res.send({
            name
         });
      } catch (error) {
         console.log(error);
         res.status(500).send({
            error: 'Something went wrong with getting users in this meeting, please try again later'
         })
      }
   },
   async createGuestUser(req, res) {
      try {
         const newUser = await User.create({
            name: req.body.name
         });
         res.send(newUser);
      } catch (error) {
         console.log(error);
         res.status(500).send({
            error: 'Something went wrong with creating a guest user, please try again later'
         })
      }
   }

}