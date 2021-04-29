const {CandidateMeeting, Vote} = require('../models');

module.exports = {
   async createCandidateMeeting(req, res) {
      try {
         const candidateMeeting = await CandidateMeeting.create({
            start: req.body.start,
            end: req.body.end,
            meetingID: req.body.meetingID
         });
         res.send(candidateMeeting);
      } catch (error) {
         console.log(error)
         res.status(500).send({
            error: 'Something went wrong with creating a candidate meeting, please try again later'
         });
      }
   },
   async editCandidateMeeting(req, res) {
      try {
         const candidateMeeting = await CandidateMeeting.update({
            start: req.body.start,
            end: req.body.end,
         }, {
            where: {
               candidateID: req.body.candidateID
            }
         });
         res.send(candidateMeeting);
      } catch (error) {
         res.status(500).send({
            error: 'Something went wrong with editing candidate meeting details, please try again later'
         });
      }
   },
   async deleteCandidateMeeting(req, res) {
      try {
         await Vote.destroy({
            where: {
               candidateID: req.body.candidateID
            }
         });
         await CandidateMeeting.destroy({
            where: {
               candidateID: req.body.candidateID
            }
         });
         res.send("success");
      } catch(error) {
         res.status(500).send({
            error: 'Something went wrong with deleting candidate meeting , please try again later'
         });
      }
   }
}