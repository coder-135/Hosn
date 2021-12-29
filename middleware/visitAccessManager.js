
const listFields = (req)=>{

    const role = req.userRole;

     let fields ;

    if ( role === 'visitSupport'){

        fields = {
            fullName : 1 , 
            product : 1 , 
            visitCode : 1 , 
            requestDate : 1 ,
            parentId : 1, 
            visitDate: 1,
            type : 1
        };

        req.query.parentState = 'supportCheck' ;
    }
else if( role === 'financeManager'){
    fields= {
        fullName : 1 , 
        product : 1 , 
        visitCode : 1 , 
        requestDate : 1 ,
        parentId : 1, 
        visitDate: 1,
        type : 1
    };

    req.query.state = 'finalFinanceCheck';
}
else if ( role === 'dataCollector'){
    
    fields  = {
        _id : 0 , 
        expertName : 1 , 
        fullName :1 ,
        visitSendDate : 1 , 
        visitDate : 1 , 
        visitCode : 1 ,
        visitId : 1
    }
    req.query.state = 'dataCheck' ; 

}
else if ( role === 'analyst'){
    
    fields  = {
        _id : 0 , 
        expertName : 1 , 
        fullName :1 ,
        visitSendDate : 1 , 
        visitDate : 1 , 
        visitCode : 1 ,
        visitId : 1
    }
    req.query.state = 'analysCheck' ; 

}
else if ( role === 'educationManager'){
     fields = {
        expertName : 1 , 
        fullName :1 ,
        visitSendDate : 1 , 
        visitDate : 1 , 
        isPaid : 1,
        visitCode : 1
     }
     req.query.state = 'educationCheck' ;

} 
    req.fields = fields;

};


const detailFields = (req)=>{
    const role = req.userRole;

    let fields ;

    if ( role === 'visitSupport'){
     fields = {
     isPaid : 0 ,
     status : 0 ,
     downloadLink: 0 ,
     userId : 0 ,
  };
  
    }

  else  if ( role === 'sale'){ 
        fields = { _id : 0} ; 
        req.query.state = 'saleCheck'

    }

    else if( role === 'financeManager'){
        fields= {_id : 0};
    
        req.query.state = 'finalFinanceCheck';
    }
    else if ( role === 'analyst'){
        fields = { _id : 0 }
        req.query.state = 'analystCheck';
        
    }   else if ( role === 'dataCollector'){
        fields = { _id : 0 }
        req.query.state = 'dataCheck';
    }
    req.fields = fields;
};

module.exports  = {
    detailFields , 
    listFields
};
