const config = require('./../../../utils/initializer');

const findUserRole = async(filter)=>{
    try {
        const user = await config.mongoDB.collection("users").findOne(filter, {projection:{_id:0}});
        return user;
    } catch (err) {
        throw {
            status : 400,
            message : err.message
        }
    }


};

const findFeature = async(query) => {
    try {
        const feature= await config.mongoDB.collection("features").findOne(query);
        return feature;
    } catch (err) {
        throw {
            status: 400,
            message:err.message,
        }
    }
};

module.exports ={
    findUserRole,
    findFeature
}