const db = require("../models");
const {QueryTypes} = require("sequelize");
const {Vote} = require('../models');

module.exports = {
   async getVotes(req, res) {
     try {
        const votes = await db.sequelize.query(`SELECT count(userID) as count, candidateID
                                                     FROM Votes
                                                     WHERE candidateID = ${req.query.candidateID}`, {type: QueryTypes.SELECT});
        const voteInformation = await Vote.findAll({
           attributes: ['candidateID', 'userID'],
           where: {
              candidateID: req.query.candidateID
           }
        });
        res.send(votes, voteInformation);
     }  catch (error) {
        res.status(500).send({
           error: 'Something went wrong with getting the meeting\'s votes, please try again later'
        })
     }
   },
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