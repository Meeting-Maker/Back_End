const Joi = require('joi');

module.exports = {
    register(req, res, next) {
        const schema = Joi.object({
            email: Joi.string().email(),
            name: Joi.string().min(1).max(32).regex(new RegExp('^[a-zA-Z]')),
            password: Joi.string().min(8).max(32).regex(
                new RegExp('^[a-zA-Z0-9]')),
            guest: Joi.any()
        });
        const { error } = schema.validate(req.body);

        if(error){
            switch(error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address'
                    });
                    break;
                case 'password':
                    res.status(400).send({
                        error: `The password provided failed to match the following rules:<br>1. It must contain ONLY the following characters: lower case, upper case, numbers
                        <br>
                        2. It must be at least 8 characters long and no greater than 32 characters in length
                        `
                    });
                    break;
                default:
                    res.status(400).send({
                        error: "invalid registration information"
                    });
                    break;
            }
        }else {
            next()
        }
    }
}