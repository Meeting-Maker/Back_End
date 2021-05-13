const {QueryTypes} = require("sequelize");
const {User, Meeting, MeetingMember, CandidateVote, Vote, CandidateMeeting} = require('../models')
const db = require('../models')

async function getUsers(meetingID) {
    const userID = await MeetingMember.findAll({
        attributes: ['userID', 'role'],
        where: {
            meetingID: meetingID
        }
    });
    const users = [];
    for (const i in userID) {
        await users.push(await User.findOne({
            attributes: ['name', 'id'],
            where: {
                id: userID[i].dataValues.userID
            }
        }));
    }
    return users;
}

module.exports = {
    async meetingExists(req, res) {
        try {
            const meetingCount = await Meeting.count({
                where: {
                    meetingID: req.query.meetingID
                }
            });
            res.send({
                meetingExists: meetingCount === 1
            });
        } catch (error) {
              res.status(500).send({
                error: 'Something went wrong with validating your meetingID.'
            });
        }
    },
    async getMeeting(req, res) {
        try {
            const users = await getUsers(req.query.meetingID);
            const candidateMeeting = await CandidateMeeting.findAll({
                attributes: ['candidateID', 'start', 'end', 'length'],
                where: {
                    meetingID: req.query.meetingID
                }
            })
            let votes = [];
            let voteInformation = [];
            for (const i in candidateMeeting) {
                votes.push(await db.sequelize.query(`SELECT count(userID) as count, candidateID
                                                     FROM Votes
                                                     WHERE candidateID = ${candidateMeeting[i].dataValues.candidateID}`, {type: QueryTypes.SELECT}));
                voteInformation.push(await Vote.findAll({
                    attributes: ['candidateID', 'userID'],
                    where: {
                        candidateID: candidateMeeting[i].dataValues.candidateID
                    }
                }));
            }
            res.send({
                users,
                candidateMeeting,
                votes,
                voteInformation
            })
        } catch (error) {
            res.status(500).send({
                error: 'Something went wrong with getting your meeting, please try again later'
            })
        }
    },
    async getMeetingDetails(req, res) {
        try {
            const meetingDetails = await Meeting.findOne({
                attributes: ['meetingID', 'title', 'description', 'dueDate'],
                where: {
                    meetingID: req.query.meetingID
                }
            });
            res.send({
                meetingDetails: meetingDetails
            })
        } catch (error) {
            console.log(error);
            res.status(500).send({
                error: 'Something went wrong with getting your meeting, please try again later'
            })
        }
    },
    async createGuestMeeting(req, res) {
        try {
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
            res.send({userID: user.id});
        } catch (error) {
            console.log(error);
            res.status(500).send({
                error: 'Something went wrong with creating a meeting, please try again later'
            })
        }
    },
    async getUsers(req, res) {
        try {
            const users = await getUsers(req.query.meetingID);
            res.send({
                users
            });
        } catch (error) {
            res.status(500).send({
                error: 'Something went wrong with getting users in this meeting, please try again later'
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
            res.send({userID: user.id});
        } catch (error) {
            res.status(500).send({
                error: 'Something went wrong with adding a user to the meeting, please try again later'
            })
        }
    },
    async editMeetingType(req, res) {
        try {
            await Meeting.update({
                pollType: req.body.pollType,
            }, {
                where: {
                    meetingID: req.body.meetingID
                }
            });
            res.status(200).send();
        } catch (error) {
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
            res.status(200).send();
        } catch (error) {
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
                    meetingID: req.query.meetingID
                }
            })
            const candidateID = CandidateVote.findAll({
                where: {
                    meetingID: req.query.meetingID
                }
            })

            await MeetingMember.destroy({
                where: {
                    meetingID: req.query.meetingID
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
                if (users[i].guest === true)
                    await User.destroy({
                        where: {
                            id: users[i].id
                        }
                    });
            }
            await Meeting.destroy({
                where: {
                    meetingID: req.query.meetingID
                }
            });
            res.status.send();
        } catch (error) {
            res.status(500).send({
                error: 'Something went wrong with deleting the meeting, please try again later'
            });
        }
    }
}

