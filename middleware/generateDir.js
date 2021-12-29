const fs = require('fs');
const path = require('path');

let generateCheckDir = (req,res,next)=>{
    let  filePath= path.join(process.cwd(), `/uploads/checklists/${req.query.visitId}`);
    if(!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath);
        next();
    } else {
        next();
    }
}

let generateMealPlanDir = (req,res,next)=>{
    //ساخت ادرس تا روت پروژه
    let  filePath= path.join(process.cwd(), `/uploads/farmers/${req.query.farmerId}`);
    if(!fs.existsSync(filePath)){
        fs.mkdirSync(filePath);
        let  filePath2= path.join(process.cwd(), `/uploads/farmers/${req.query.farmerId}/mealPlan`);
        fs.mkdirSync(filePath2);
        next();
    } else {
        next();
    }
}



module.exports = {generateCheckDir , generateMealPlanDir}

