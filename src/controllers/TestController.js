const { meeting_member } = require('../models')

module.exports = {
   async hello(req, res) {
      try {
         const users = await meeting_member.create({
            meeting_id: 'abcdfe',
            user_id: '1'
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