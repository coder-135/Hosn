const multer = require('multer');
const {v4: uuidv4} = require('uuid');

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `./uploads/checklistSampleData`);

  },
  filename: function (req, file, cb) {
    const {originalname} = file;
    cb(null, `${originalname}`);
  }
});
let questionnaireStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `./uploads/questionnaire`);

  },
  filename: function (req, file, cb) {
    const {originalname} = file;
    cb(null, `${originalname}`);
  }
});


let storageMealPlan = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, `./uploads/farmers/${req.query.farmerId}/mealPlan`);
    cb(null, `./uploads/mealPlans`);

  },
  filename: function (req, file, cb) {
    req.mealPlanId = uuidv4();
    let suffix = file.originalname.split('.')[1]
    cb(null, `${req.mealPlanId}.${suffix}`);
  }
})
let storageVisitReport = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, `./uploads/farmers/${req.query.farmerId}/mealPlan`);
    cb(null, `./uploads/visitReports`);

  },
  filename: function (req, file, cb) {
    req.visitReportId = uuidv4();
    const suffix = file.originalname.split('.')[1]
    cb(null, `${req.visitReportId}.${suffix}`);
  }
})

let storageImage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `./uploads/images`);

  },
  filename: function (req, file, cb) {
    const {originalname} = file;
    cb(null, `${Date.now()}-${originalname}`);
  }
})

let storageAvatar = multer.diskStorage({
  destination: function (req,file,cb) {
    cb(null , `./uploads/avatars`);
  },
  filename: function (req, file, cb) {
    req.avatarId = uuidv4();
    const suffix = file.originalname.split('.').pop();
    cb(null, `${req.avatarId}.${suffix}`);
  }
});

let storageExelVisitData = multer.diskStorage({
  destination : function(req , files , cb){
    cb (null , `./uploads/exelVisitData`  );
},
filename : function (req , file , cb){
  req.exelId= uuidv4();
  const suffix = file.originalname.split('.')[1];
  cb(null, `${req.exelId}.${suffix}`);
}}
);

let questionaireExelData = multer.diskStorage({
  destination : function(req , files , cb){
    cb (null , `./uploads/questionaireExelData`  );
},
filename : function (req , file , cb){
  req.exelId= uuidv4();
  const suffix = file.originalname.split('.')[1];
  cb(null, `${req.exelId}.${suffix}`);
}}
);
const maxSize = '5 * 1024 * 1024';
const uploadVisitTask = multer({storage: storage, limits: {fileSize: maxSize}});
const uploadQuestionnaire = multer({storage: questionnaireStorage, limits: {fileSize: maxSize}});
const uploadMealPlan = multer({storage: storageMealPlan, limits: {fileSize: maxSize}});
const uploadImage = multer({storage: storageImage, limits: {fileSize: maxSize}});
const uploadVisitReport = multer({storage: storageVisitReport, limits: {fileSize: maxSize}});
const uploadAvatar = multer({storage:storageAvatar, limits:{fileSize: maxSize}});
const uploadExelVisit = multer({storage: storageExelVisitData , limits : {fileSize : maxSize}});
const uploadExelQuestionaire = multer ({storage : questionaireExelData , limits : {fileSize : maxSize}});

module.exports = {
  uploadVisitTask,
  uploadMealPlan,
  uploadImage,
  uploadVisitReport,
  uploadAvatar ,
  uploadExelVisit ,
  uploadQuestionnaire ,
 uploadExelQuestionaire
};


