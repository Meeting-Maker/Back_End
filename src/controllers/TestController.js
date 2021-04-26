const { vote } = require('../models')

module.exports = {
   async hello(req, res) {
      try {
         const users = await vote.create({
            user_id: 1,
            candidate_meeting_id : 1
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