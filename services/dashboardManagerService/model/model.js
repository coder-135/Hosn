let config = require('./../../../utils/initializer');
const {Code} = require("mongodb");
const { query } = require('express');
// const id = require("ajv/lib/vocabularies/core/id");


const updateAvatar = async (input) => {
  try {
    await config.mongoDB.collection('users').updateOne({uid: input.userId}, {$set: {avatar: input.avatarUrl}});
  } catch (err) {
    throw {
      status: 400,
      message: err.message
    }
  }
}

const deleteAvatar = async (input) => {
  try {
    await config.mongoDB.collection('users').updateOne({uid: input.userId}, {$set: {avatar: 'https://agrodayan.ir/uploads/avatars/avatar.png'}});
  } catch (err) {
    throw {
      status: 400,
      message: err.message
    }
  }
}

const staticAvatars = async ()=>{
  try {
   let result = await config.mongoDB.collection('staticAvatars').find({},{projection:{_id:0}}).toArray();
   return result
  } catch (err) {
    throw {
      status: 400,
      message: err.message
    }
  }
}

const farmerSurvey = async (farmerSampleSurvey) => {
  try {
   await config.mongoDB.collection('farmerSurvey').insertOne(farmerSampleSurvey);

  }
  catch (err) {
    throw {
      status: 400,
      message: err.message
    }
  }
}



const expertSurvey = async (expertSampleSurvey) => {
  try {
     await config.mongoDB.collection('expertSurvey').insertOne(expertSampleSurvey);
  } catch (err) {
    throw {
      status: 400,
      message: err.message
    }
  }
}


const getFarmerSurvey = async (query) => {
  try {
    const result = await config.mongoDB.collection('farmerSurvey').find(query, {projection: {_id: 0}}).toArray();
    return result;
  }
  catch (err) {
    throw {
      status: 400,
      message: err.message
    }
  }
}
const getExpertSurvey = async (query) => {
  try {
    const result = await config.mongoDB.collection('expertSurvey').find(query, {projection: {_id: 0}}).toArray();
    return result;
  } catch (err) {
    throw {
      status: 400,
      message: err.message
    }
  }
}



const updateFarmerSurvey = async (surveyData, expertDataRate) => {
  try {
    await config.mongoDB.collection('users').updateOne({expertCode:expertDataRate.expertCode},{$set:expertDataRate});
    await config.mongoDB.collection('farmerSurvey').updateOne({id:surveyData.id},{$set:surveyData});
  } catch (err) {
    throw {
      status: 400,
      message: err.message
    }
  }
}
const updateExpertSurvey = async (surveyData) => {
  try {
    await config.mongoDB.collection('expertSurvey').updateOne({id:surveyData.id},{$set:surveyData});
  } catch (err) {
    throw {
      status: 400,
      message: err.message
    }
  }
}

module.exports = {
  updateAvatar,
  deleteAvatar,
  staticAvatars,
  farmerSurvey,
  expertSurvey,
  getFarmerSurvey,
  getExpertSurvey,
  updateFarmerSurvey,
  updateExpertSurvey
}
