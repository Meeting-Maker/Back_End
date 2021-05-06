const UserController = require('./controllers/UserController');
const MeetingController = require('./controllers/MeetingController');
const CandidateMeetingController = require('./controllers/CandidateMeetingController');
const Vote = require('./controllers/VoteController');
const AuthenticationControllerPolicy = require('./policy/AuthenticationControllerPolicy')

module.exports = (app) => {
   // User routes

   app.post('/register',  AuthenticationControllerPolicy.register, UserController.register);

   app.post('/login', UserController.login);

   // Meeting

   app.get('/getMeeting', MeetingController.getMeeting)

   app.post('/createGuestMeeting', MeetingController.createGuestMeeting);

   app.post('/addGuestUser', MeetingController.addGuestUser)

   app.get('/getUsers', MeetingController.getUsers);

   app.post('/editMeetingType', MeetingController.editMeetingType);

   app.post('/editMeetingDetails', MeetingController.editMeetingDetails);

   app.delete('/deleteMeeting', MeetingController.deleteMeeting);

   // Candidate meeting

   app.post('/createCandidateMeeting', CandidateMeetingController.createCandidateMeeting);

   app.get('/getCandidateMeetings', CandidateMeetingController.getCandidateMeetings);

   app.post('/editCandidateMeeting', CandidateMeetingController.editCandidateMeeting);

   app.delete('/deleteCandidateMeeting', CandidateMeetingController.deleteCandidateMeeting);

   // Vote

   app.get('/getVote', Vote.getVote)

   app.post('/createVote', Vote.createVote);

   app.delete('/deleteVote', Vote.deleteVote);

}