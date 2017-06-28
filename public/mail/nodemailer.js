'use strict';
const nodemailer = require('nodemailer');
require('dotenv').config();

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: `${process.env.EMAIL}`,
        pass: `${process.env.PASS}`
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: `"Brandon Booth" <${process.env.EMAIL}>`, // sender address
    to: `${process.env.EMAIL}`, // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});
