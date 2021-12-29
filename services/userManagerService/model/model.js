
const config = require("./../../../utils/initializer");

const addUser = async(data) => {
    try {
        const user = await config.mongoDB.collection("users").insertOne(data);
        return user;
    } catch (err) {
        throw {
            status: 400,
            message:err.message,
        }
    }
};

const updateUser = async(userData) => {
    try { 
      const user =  await config.mongoDB
            .collection("users")
            .updateOne({phoneNumber : userData.phoneNumber}, { $set:userData} , {upsert :true});
      return user;
    } catch (err) {
        throw {
            status: 400,
            message: err.message,
        }
    }
};

const findUser = async(query) => {
    try {
        const user = await config.mongoDB.collection("admins").findOne(query,{projection:{_id:0}});
        return user;
    } catch (err) {
        throw {
            status: 400,
            message: err.message,
        }
    }
};

const findUsers = async(query)=>{
    try{
        const users = await config.mongoDB.collection("users").find(query,{projection:{_id : 0}}).toArray();
        return users;
    }catch(err){
        throw {
            status: 400,
            message: err.message,
        }
    }
};

const deleteUser = async(query)=>{

    try{
        const user = await config.mongoDB.collection("users").deleteOne(query);
        return user;
    }catch(err){
        throw {
            status: 400,
            message: err.message,
        }
    }
}

const users =async(query)=>{
    let result = await config.mongoDB.collection('users').find(query,{projection:{_id:0}}).toArray();
    return result;
}



const showProfile = async (req) => {
    try {
        let selfProfile = await config.mongoDB.collection('users').findOne(req,{projection:{_id:0}});
        return selfProfile

    }catch (err) {
        throw {
            status: 400,
            message:err.message
        }
    }
}




const userProfile = async (req) => {
    let updateProfile = await config.mongoDB.collection('users').findOne(req,{projection:{_id:0}});
    return updateProfile;

}



module.exports = {
    addUser,
    findUser,
    updateUser,
    findUsers,
    deleteUser ,
    users,
    showProfile,
    userProfile
};
