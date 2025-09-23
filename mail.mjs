import nodemailer from 'nodemailer'
import 'dotenv/config'
// Nodemailer configuration
// const transporter = nodemailer.createTransport({
//     name: 'smtp-mail.outlook.com',
//     host: 'smtp-mail.outlook.com',
//     port: 587, //outgoing port 
//     secure: true, // use false for STARTTLS; true for SSL on port 465
//     auth: {
//       user: process.env.NODEMAILER_EMAIL,
//       pass: process.env.NODEMAILER_PASS,
//     },
//     tls: {
//       rejectUnauthorized: false, //needed for sending via bluehost 
//     }
//   });
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "laura.lemoine1230@gmail.com",
      pass: process.env.GOOGLE_APP_PASSWORD,
    },
  });
  try {
    
    const mailOptions = {
      from: 'laura.lemoine1230@gmail.com',
      to: 'barrycumbie@gmail.com',
      subject: 'CIS 486 yay',
      text: 'Hi!'
    };

    // await registrations.insertOne(req.body);
   
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error('Error:', error);
      } else {
        console.log('Email sent:', info.response);
        res.json({success : req.body.emailBody, status : 200, info: info.response});
      }
    });
 
  } catch (error) {
    console.error('Error in /register:', error);
  } finally{
};