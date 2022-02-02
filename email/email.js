var nodemailer = require('nodemailer');
require("dotenv").config();

var pass = process.env.PASS

var transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ameya@ideausher.com',
        pass: pass
    }
});

var mailOptions = {
    from: "ameya@ideausher.com",
    to: "shubham.gupta@ideausher.com",
    subject: "Sending the email through node.js",
    text: "This code will be committed onto Github"
};

transport.sendMail(mailOptions, (error,info) => {
    if (error) {
        console.log(error); 
    } else {
        console.log('Email Sent' + info.response);
    }
})