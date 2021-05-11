const UserController = require('./controllers/UserController');
const MeetingController = require('./controllers/MeetingController');
const CandidateMeetingController = require('./controllers/CandidateMeetingController');
const Vote = require('./controllers/VoteController');
const AuthenticationControllerPolicy = require('./policy/AuthenticationControllerPolicy')
const CommentController = require('./controllers/CommentController');

module.exports = (app) => {
   // User routes

   app.post('/register',  AuthenticationControllerPolicy.register, UserController.register);

   app.post('/login', UserController.login);

   // Meeting

   app.get('/meetingExists', MeetingController.meetingExists);

   app.get('/getMeeting', MeetingController.getMeeting);

   app.get('/getMeetingDetails', MeetingController.getMeetingDetails)

   app.post('/createGuestMeeting', MeetingController.createGuestMeeting);

   app.post('/addGuestUser', MeetingController.addGuestUser);

   app.get('/getUsers', MeetingController.getUsers);

   app.post('/editMeetingType', MeetingController.editMeetingType);

   app.post('/editMeetingDetails', MeetingController.editMeetingDetails);

   app.delete('/deleteMeeting', MeetingController.deleteMeeting);

   // Candidate meeting

   app.post('/createCandidateMeeting', CandidateMeetingController.createCandidateMeeting);

   app.get('/getCandidateMeetings', CandidateMeetingController.getCandidateMeetings);

   app.post('/editCandidateMeeting', CandidateMeetingController.editCandidateMeeting);

   app.delete('/deleteCandidateMeeting', CandidateMeetingController.deleteCandidateMeeting);

   app.get('/getCandidateMeetings', CandidateMeetingController.getCandidateMeetings);

   // Vote

   app.get('/getVotes', Vote.getVotes)

   app.post('/createVote', Vote.createVote);

   app.delete('/deleteVote', Vote.deleteVote);


   // Comment

   app.get('/getComments', CommentController.getComments);

   app.post('/createComment', CommentController.createComment);

   app.delete('/deleteComment', CommentController.deleteComment);
}