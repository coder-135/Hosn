const axios = require('axios');

class SmsSender {

     async getSmsToken() {
        try {
            const response = await axios.post(process.env.OTP_SERVER_TOKEN, {
                UserApiKey: process.env.USER_API_KEY,
                SecretKey: process.env.SECRET_KEY,
            });

            if (!response.data.IsSuccessful) {
                throw new Error(
                    "لطفا مقادیر رمز عبور برای سامانه پیامکی را بررسی نمایبد"
                );
            }
            return response.data.TokenKey;
        } catch (err) {
            throw {
                status: 406,
                message: err.message
            }
        }
    }

     async sendSms(smsToken, phoneNumber, params) {
        try {
            const config = {
                headers: {
                    "x-sms-ir-secure-token": smsToken,
                },
            };
            const {idCode} = params;
             delete params.idCode;

            let eTemplateId = '53183';
            let fTemplateId = '47200'; 
            let vTemplateId = '59240';
            let qTemplateId = '59241';
            let seTemplateId = '59243';
            let bTemplateId = '59242';
            let cTemplateId = '59244';
            let rTemplateId = '';


            let flag = idCode.charAt(0);

            let data;

            if(flag === 'v'){
                 data = {
                    "ParameterArray":[{ "Parameter": "VisitCode" , "ParameterValue": idCode} ,
                    {"Parameter": "ProductName" , "ParameterValue": params.productName}],
                        "Mobile": phoneNumber,
                        "TemplateId" : vTemplateId
                }
            }else if (flag === 'q'){
                data = {
                    "ParameterArray":[{"Parameter": "ProductName" , "ParameterValue": params.productName},
                                      { "Parameter": "QuestionnaireLink" , "ParameterValue": params.link}],
                        "Mobile": phoneNumber,
                        "TemplateId" : qTemplateId
                }

            }
            else if (flag === 's'){
                data = {
                    "ParameterArray":[{ "Parameter": "ProductName" , "ParameterValue": params.productName} ,
                    {"Parameter": "VisitCode" , "ParameterValue": params.visitCode},
                    {"Parameter": "ExpertName" , "ParameterValue": params.expertName},
                    {"Parameter": "ExpertCode" , "ParameterValue": params.expertCode}],
                        "Mobile": phoneNumber,
                        "TemplateId" : seTemplateId
                }
            }else if(flag === 'b'){
                data = {
                    "ParameterArray":[{ "Parameter": "FactorId" , "ParameterValue": params.factorId} ,
                    {"Parameter": "Category" , "ParameterValue": params.category},
                    {"Parameter": "PaymentUrl" , "ParameterValue": params.paymentUrl}],
                        "Mobile": phoneNumber,
                        "TemplateId" : bTemplateId
                }
            }else if (flag === 'c'){
                data = {
                    "ParameterArray":[{ "Parameter": "ProductName" , "ParameterValue": params.productName} ,
                    {"Parameter": "VisitCode" , "ParameterValue": params.visitCode},
                    {"Parameter": "SurveyLink" , "ParameterValue": params.surveyLink}],
                        "Mobile": phoneNumber,
                        "TemplateId" : cTemplateId
                }
            }
            else{
                data = {
                    "ParameterArray":[{ "Parameter": flag === 'f'? 'FarmerCode' : 'expertCode' , "ParameterValue": idCode}],
                        "Mobile": phoneNumber,
                        "TemplateId" : flag === 'f' ? fTemplateId : eTemplateId
                }
            }
            

            const IsSmsSent = await axios.post(
                process.env.OTP_SERVER_SEND_ULTRA_FAST_SMS,
                data,
                config
            );

            if (!IsSmsSent.data.IsSuccessful) {
                throw new Error("پیامک ارسال نشد، لطفا دوباره تلاش کنید");
            }

            return idCode;

        } catch (err) {
            throw {
                status: 406,
                message: err.message,
            }
        }
    }


}


module.exports = SmsSender ;
