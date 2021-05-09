const {CandidateMeeting, Vote} = require('../models');

module.exports = {
   async getCandidateMeetings(req, res) {
      try{
         const candidateMeetings = await CandidateMeeting.findAll({
            attributes: ['candidateID', 'start', 'end', 'meetingID', 'length'],
            where: {
               meetingID: req.query.meetingID
            }
         });

         res.send({
            candidateMeetings
         });
      }catch(error){
         res.status(500).send({
            error: 'Something went wrong retrieving candidate meetings'
         });
      }
   },
   async createCandidateMeeting(req, res) {
      try {
         const candidateMeeting = await CandidateMeeting.create({
            start: req.body.start,
            end: req.body.end,
            length: req.body.length,
            meetingID: req.body.meetingID
         });
         res.send(candidateMeeting);
      } catch (error) {
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
            length: req.body.length
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
               candidateID: req.query.candidateID
            }
         });
         await CandidateMeeting.destroy({
            where: {
               candidateID: req.query.candidateID
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