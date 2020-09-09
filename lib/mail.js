const nodemailer = require('nodemailer');
require('dotenv').config();


sendEMail = (context) => {
	smtpTransport = nodemailer.createTransport(smtpTransport({
	    host: process.env.MAIL_HOST,
	    secure: process.env.MAIL_SECURE,
	    port: process.env.MAIL_PORT,
	    auth: {
	        user: process.env.MAIL_USER,
	        pass: process.env.MAIL_PASS
	    }
	}));

	smtpTransport.sendMail(context);
};