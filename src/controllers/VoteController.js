const {Vote} = require('../models');

module.exports = {
   async getVotes(req, res) {
     try {
        const count = await Vote.count({
           where: {
              candidateID: req.query.candidateID
           }
        });

        const users = await Vote.findAll({
           attributes: ['userID'],
           where: {
              candidateID: req.query.candidateID
           }
        });
        res.send({
           candidateID: req.query   .candidateID,
           count: count,
           users: users
        });
     }  catch (error) {
        console.log(error);
        res.status(500).send({
           error: 'Something went wrong with getting the meeting\'s votes, please try again later'
        })
     }
   },
   // todo: check for duplicate vote
   async createVote(req, res) {
      try {
         await Vote.create({
            candidateID: req.body.candidateI,
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
               candidateID: req.query.candidateID,
               userID: req.query.userID
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