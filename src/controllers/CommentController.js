const {Comment} = require('../models');
const db  = require('../models');

module.exports = {
   async getComments(req, res) {
      try{
         const comments = await db.sequelize.query(`select c.commentID, c.meetingID, c.userID, c.content, c.createdAt, u.name from Comments c inner join users u on c.userID = u.id AND meetingID = '${req.query.meetingID}'`);
         console.log(comments)
         res.send({
            comments : comments[0]
         });
      }catch(error){
         res.status(500).send({
            error: 'Something went wrong retrieving comments for this meeting.'
         });
      }
   },
   async createComment(req, res) {
      try {
         let comment = await Comment.create({
            meetingID: req.body.meetingID,
            userID: req.body.userID,
            content: req.body.content
         });
         Object.assign(comment.dataValues, {name: req.body.name})
         res.send(comment);
      } catch (error) {
         res.status(500).send({
            error: 'Something went wrong when creating this comment.'
         });
      }
   },
   async deleteComment(req, res) {
      try {
         await Comment.destroy({
            where: {
               commentID: req.query.commentID
            }
         });
         res.send();
      } catch(error) {
         res.status(500).send({
            error: 'Something went wrong with deleting this comment.'
         });
      }
   }
}