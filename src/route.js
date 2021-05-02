const TestController = require('./controllers/TestController');
const UserController = require('./controllers/UserController');
const MeetingController = require('./controllers/MeetingController');
const CandidateMeetingController = require('./controllers/CandidateMeetingController');
const Vote = require('./controllers/VoteController');
const AuthenticationControllerPolicy = require('./policy/AuthenticationControllerPolicy')

module.exports = (app) => {
   app.get('/test', TestController.hello);

   // User routes

   app.post('/register',  AuthenticationControllerPolicy.register, UserController.register);

   app.post('/login', UserController.login);

   app.post('/createGuestUser', UserController.createGuestUser);

   app.get('/getUsers', UserController.getUsers);

   // Meeting

   app.post('/createGuestMeeting', MeetingController.createGuestMeeting);

   app.post('/editMeetingType', MeetingController.editMeetingType);

   app.post('/editMeetingDetails', MeetingController.editMeetingDetails);

   app.delete('/deleteMeeting', MeetingController.deleteMeeting);

   // Candidate meeting

   app.post('/createCandidateMeeting', CandidateMeetingController.createCandidateMeeting);

   app.post('/editCandidateMeeting', CandidateMeetingController.editCandidateMeeting);

   app.delete('/deleteCandidateMeeting', CandidateMeetingController.deleteCandidateMeeting);

   app.get('/getCandidateMeetings', CandidateMeetingController.getCandidateMeetings);

   // Vote

   app.post('/createVote', Vote.createVote);

   app.delete('/deleteVote', Vote.deleteVote);

}