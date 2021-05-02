const {User, Meeting, MeetingMember, CandidateVote, Vote} = require('../models')

module.exports = {
    async createGuestMeeting(req, res) {
        try {
            console.log(req.body);
            const user = await User.create({
                name: req.body.name
            });
            const meeting = await Meeting.create({
                meetingID: req.body.meetingID,
                title: req.body.title,
                description: req.body.description,
                dueDate: req.body.dueDate,
                pollType: req.body.pollType
            });
            await MeetingMember.create({
                userID: user.id,
                meetingID: meeting.meetingID,
                role: 1
            });
            res.send();
        } catch (error) {
            console.log(error);
            res.status(500).send({
                error: 'Something went wrong with creating a meeting, please try again later'
            })
        }
    },
    async addGuestUser(req, res) {
      try {
          const user = await User.create({
             name: req.body.name
          });
          await MeetingMember.create({
             userID: user.id,
             meetingID: req.body.meetingID
          });
          res.status(200).send();
      } catch (error) {
          console.log()
          res.status(500).send({
              error: 'Something went wrong with adding a user to the meeting, please try again later'
          })
      }
    },
    async editMeetingType(req, res) {
        try {
            console.log(req.body.pollType)
            await Meeting.update({
                pollType: req.body.pollType,
            }, {
                where: {
                    meetingID: req.body.meetingID
                }
            });
            res.send();
        } catch (error) {
            console.log()
            res.status(500).send({
                error: 'Something went wrong with editing the meeting type, please try again later'
            })
        }
    },
    async editMeetingDetails(req, res) {
        try {
            await Meeting.update({
                title: req.body.title,
                description: req.body.description
            }, {
                where: {
                    meetingID: req.body.meetingID
                }
            });
            res.send();
        } catch (error) {
            console.log()
            res.status(500).send({
                error: 'Something went wrong with editing meeting details, please try again later'
            });
        }
    },
    async deleteMeeting(req, res) {
        try {

            const users = await MeetingMember.findAll({
                attributes: ['userID'],
                where: {
                    meetingID: req.body.meetingID
                }
            })
            const candidateID = CandidateVote.findAll({
                where: {
                    meetingID: req.body.meetingID
                }
            })

            await MeetingMember.destroy({
                where: {
                    meetingID: req.body.meetingID
                }
            });

            for (const i in users) {
                for (const j in candidateID) {
                    await Vote.destroy({
                        where: {
                            usersID: users[i].id,
                            candidateID: candidateID[j].candidateID
                        }
                    })
                }
                // todo check if user is a guest user, if it is then delete
                await User.destroy({
                    where: {
                        id: users[i].id
                    }
                });
            }
            await Meeting.destroy({
                where: {
                    meetingID: req.body.meetingID
                }
            });
            res.send("success");
        } catch (error) {
            console.log(error);
            res.status(500).send({
                error: 'Something went wrong with deleting the meeting, please try again later'
            });
        }
    }
}

