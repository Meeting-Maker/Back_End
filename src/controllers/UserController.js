const {User, MeetingMember} = require('../models')

module.exports = {
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