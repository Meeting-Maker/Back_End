const {Comment} = require('../models');

module.exports = {
   async getComments(req, res) {
      try{
         const comments = await Comment.findAll({
            attributes: ['commentID', 'meetingID', 'userID', 'name', 'content', 'createdAt'],
            where: {
               meetingID: req.query.meetingID
            }
         });
         res.send({
            comments
         });
      }catch(error){
         res.status(500).send({
            error: 'Something went wrong retrieving comments for this meeting.'
         });
      }
   },
   async createComment(req, res) {
      try {
         const comment = await Comment.create({
            meetingID: req.body.meetingID,
            userID: req.body.userID,
            name: req.body.name,
            content: req.body.content
         });
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