const {Vote} = require('../models');

module.exports = {
   // todo: check for duplicate vote
   async createVote(req, res) {
      try {
         await Vote.create({
            candidateID: req.body.candidateID,
            userID: req.body.userID
         });
         res.send("successfully voted")
      } catch (error) {
         res.status(500).send({
            error: 'Something went wrong with inserting your vote, please try again later'
         })
      }
   },
   async deleteVote(req, res) {
      try {
         await Vote.destroy({
            where: {
               candidateID: req.body.candidateID,
               userID: req.body.userID
            }
         });
         res.send("successfully deleted your voted")
      } catch (error) {
         res.status(500).send({
            error: 'Something went wrong with deleting your vote, please try again later'
         })
      }
   }
}