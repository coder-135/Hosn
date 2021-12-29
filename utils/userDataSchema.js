class User{
  constructor(flag){
          this.flag = flag;
  }

    userSchema(data) {
      
            let userData = {
                 fullName : data.fullName || null,
                 phoneNumber :  data.phoneNumber||null,
                 avatar: 'https://agrodayan.ir/uploads/avatars/avatar.png',
                 nationalCode :data.nationalCode||null,
                 province :data.province||null,
                 city:data.city||null,
                 zone:data.zone||null,
                 reference :data.reference||null,
                 field :data.field||null,
                 subfield :data.subfield||null,
                 grade :data.grade||null,
                 address : data.address || null,
                 moreDetails : data.moreDetails || null ,
                 products : data.products || null ,
                 
                };
     
           Object.keys(userData).forEach((k) => userData[k] == null && delete userData[k]);
   
           let userData_= this.assignRoleValues(userData);
            return userData_;
    }

    assignRoleValues(userData){
         let code= this.makeid(userData.nationalCode);
            if(this.flag === 'f'){
                userData.activeRole = 'farmer';
                userData.farmerCode = code;
                userData.questionaires = [];
         }else{
           userData.expertCode= code;
           userData.activeRole= 'expert';
           }    
          return userData;      
    }

     makeid(nationalCode) {
        let uniqueSignature = nationalCode.slice(4 , 10);     
        let result = this.flag+uniqueSignature;
        return result;
   };



}

module.exports = User;