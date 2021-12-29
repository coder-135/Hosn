const Ajv = require("ajv");
const ajv = new Ajv({ allErrors: true });

let validator =  (req,schema)=>{
    const validate = ajv.compile(schema);
        if (validate(req.body)) {
           return true;
        } else {
            throw {
                status : 404,
                message: validate.errors,
            }
        }
};


module.exports = validator;
