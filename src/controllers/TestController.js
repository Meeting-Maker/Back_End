module.exports = {
   async hello(req, res) {
      try {
         res.send();
      } catch (err){
         res.status(500).send({
            error: 'An error has occurred'
         })
      }
   }
}