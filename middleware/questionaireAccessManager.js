const listFields = (req)=>{

    const role = req.userRole;

     let fields ;
    
     if ( role === 'Qsupport'){
         fields= {
             _id : 0
         }
         req.query.state = 'supportCheck';
     }else if ( role === 'mealPlanWriter'){
         fields = {
             fullName : 1 , 
             date : 1 ,
             _id : 0

         }
         req.query.state = 'mealPlanCheck'
     }
     else if ( role === 'datacollector'){
        fields = {
            fullName : 1 , 
            date : 1 ,
            _id : 0

        }
        req.query.state = 'dataCheck'
    }
     else if ( role === 'educationManager'){
         fields = {
             product: 1 ,
             fullName : 1 , 
             date : 1 , 
             farmerCode : 1 , 
             _id : 0 ,
         }
         req.query.state = 'educationCheck';
     }else if ( role === 'sale'){
         fields = {
             product : 1 , 
             fullName : 1,
             date : 1 ,
             farmerCode: 1 , 
             _id : 0
         }
     }
    
     req.fields = fields;
     req.query.state = 'saleCheck';

    };


    
module.exports  = {
        listFields
    
    };