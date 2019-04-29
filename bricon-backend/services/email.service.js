const nodemailer = require('nodemailer');
const config     = require('../config/index');

const sendEmail = data => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: config.gmailConfig
    });

    const options = {...{ from: 'frontend.vlad.ionescu@gmail.comm'}, ...data};

    return new Promise((resolve, reject) => {
        transporter.sendMail(options, (err, info) => {
            if(err) reject(err);
            else resolve(info);
        });
    })
};

module.exports = {
    sendEmail,
};
