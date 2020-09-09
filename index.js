

const express = require('express');
const fs = require('fs');
const handlebars = require('handlebars');
const path = require('path');
const mail = require('./lib/mail')
require('dotenv').config();
const app = express();
const port = process.env.PORT;


readFileFromPath = (path) => {
	return new Promise((resolve, reject) => {		 
			console.log('check-file-name=>', path)
			fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
				if (err) {
					reject(err);
				}
				resolve(data);
			});		 	
	});
};


app.get('/', async (req, res) => {
  
  try {
	  const filePath = path.join(__dirname, '/template/');
	  const fileName = `${filePath+ 'test.hbs'}`;
	  console.log('fileName=>', fileName)
	  const mailContent = await readFileFromPath(fileName);
	  const template = handlebars.compile(mailContent);
 	  const context = {
         username: "John Doe"
    	};
      const htmlToSend = template(context)
	  console.log('htmlToSend=>', htmlToSend);
	  /*
	  const mailOptions = {
        from: 'my@email.com',
        to : 'some@email.com',
        subject : 'test subject',
        html : htmlToSend
     };
    smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
            callback(error);
        }
    });
    */

	  
	  res.send('Hello World!'  );
  } catch(e) {
  	 throw new Error('Error')
  }
})





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
