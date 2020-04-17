const aws = require('aws-sdk');

aws.config.update({
   accessKeyId: 'AKIA2M5Q4HGUJ4UBRKZA',
   secretAccessKey: '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',
   region: 'us-east-1'
});

const ses = new aws.SES({apiVersion: '2010-12-01'});

exports.register = (req,res)=>{

   const {name, email, password} = req.body;
   //console.log('REGISTER COntroller', req.body)

   const params = {
      Source: process.env.EMAIL_FROM,
      Destination: {
         ToAddresses: [email]
      },
      ReplyToAddresses: [process.env.EMAIL_TO],
      Message: {
         Body:{
            Html:{
               Charset: 'UTF-8',
               Data: `<html><body><h1>Hello ${name}</h1><p>Enna da nonna payaley!!</p></body></html>`
            }
         },
         Subject:{
            Charset: 'UTF-8',
            Data: 'Complete your registration molneyyy...'
         }
      }
   };
      
   const sendEmail = ses.sendEmail(params).promise();

   sendEmail.then(data=>{
      console.log("******", data);
      res.send("Email sent successfully");
   })
   .catch(e=>{
      console.log("********", e);
      res.send("Error Sending Email molney");
   })
};