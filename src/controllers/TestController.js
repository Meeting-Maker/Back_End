const { MeetingMember } = require('../models')

module.exports = {
   async hello(req, res) {
      try {
         const users = await MeetingMember.create({
           meetingID: 'abcdfe',
            userID: 0
         });
         res.send(users);
      } catch (err){
         console.log(err);
         res.status(500).send({
            error: 'An error has occurred'
         })
      }
   }
}