const {Comment} = require('../models');

module.exports = {
   async getComments(req, res) {
      try{
         console.log(req.query.meetingID)
         const comments = await Comment.findAll({
            attributes: ['commentID', 'meetingID', 'userID', 'content'],
            where: {
               meetingID: req.query.meetingID
            }
         });

         res.send({
            comments
         });
      }catch(error){
         console.log(error);
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
            content: req.body.content
         });
         res.send(comment);
      } catch (error) {
         console.log(error)
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
         res.send("success");
      } catch(error) {
         console.log(error)
         res.status(500).send({
            error: 'Something went wrong with deleting this comment.'
         });
      }
   }
}