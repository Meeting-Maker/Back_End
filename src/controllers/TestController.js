module.exports = {
   async hello(req, res) {
      try {
         console.log('hello');
         res.send();
      } catch (err){
         console.log(err);
         res.status(500).send({
            error: 'An error has occurred'
         })
      }
   }
}