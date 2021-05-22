const {CandidateMeeting, Vote} = require('../models');

module.exports = {
   async getCandidateMeetings(req, res) {
      try{
         let candidateMeetings = await CandidateMeeting.findAll({
            attributes: ['candidateID', 'start', 'end', 'meetingID', 'length'],
            where: {
               meetingID: req.query.meetingID
            }
         });
         for(let i = 0; i < candidateMeetings.length; i++) {
            const voters = await Vote.findAll({
               attributes: ['userID'],
               where: {
                  candidateID: candidateMeetings[i].candidateID
               }
            });
            candidateMeetings[i].setDataValue('voters', voters);
         }
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
         const candidateID = req.query.candidateID
         await Vote.destroy({
            where: {
               candidateID: candidateID
            }
         });
         await CandidateMeeting.destroy({
            where: {
               candidateID: candidateID
            }
         });
         res.send({});
      } catch(error) {
         console.log(error)
         res.status(500).send({
            error: 'Something went wrong with deleting candidate meeting , please try again later'
         });
      }
   }
}