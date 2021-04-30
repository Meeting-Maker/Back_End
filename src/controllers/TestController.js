const { MeetingMember } = require('../models')

module.exports = {
   async hello(req, res) {
      try {
         const users = await MeetingMember.create({
           meeting_id: 'abcdfe',
            user_id: 4
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