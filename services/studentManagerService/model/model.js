let config = require('./../../../utils/initializer');


class Model {
  constructor() {
  }

  async addsStudent(inputData){
    await config.mongoDB.collection('students').insertOne(inputData);
  }
  async getStudent(inputData) {
    return await config.mongoDB.collection('students').findOne({userId:inputData.userId},{projection:{_id:0}});
  }
  async updateStudent(inputData) {
    await config.mongoDB.collection('students').updateOne({userId:inputData.userId},
      {$set:inputData});
    return await config.mongoDB.collection('students').findOne({userId:inputData.userId},{projection:{_id:0}});
  }

  async deleteStudent(inputData) {
    await config.mongoDB.collection('students').deleteOne({userId:inputData.userId});
  }

  async getStudents(inputData) {
    let result = {};
    result.data = await config.mongoDB.collection('students').find({}).project({_id:0})
      .sort({_id: -1})
      .skip((inputData.page-1) * inputData.limit)
      .limit(inputData.limit)
      .toArray();
    result.totalItem = await config.mongoDB.collection('students').count();
    return result
  }
}

module.exports = Model
