import * as mailerconfig from '../utils/mailerconfig.json';
import * as nodemailer from 'nodemailer';
import * as smtpTransport from 'nodemailer-smtp-transport';


export function sendEmailMessage(
  type: 'signup' | 'confirm' = 'signup',
  email: string, uid: string, firstName: string,
  itemName?: string, ownerName?: string) {

  console.log('send-email-message: ' + email + ' ' + firstName + ' ' + type);
  console.log(JSON.stringify(mailerconfig));
  const subject: string = (type === 'signup') ? 'Welcome to ToolTime!' : `Your rental request is awaiting approval`;
  const message: string = (type === 'signup')
    ? `Thanks for signing up for ToolTime. Your account has successfully been created!`
    : `Your request to rent ${ ownerName ? `${ ownerName }'s` : 'a(n)' } ${ itemName } has been sent to the owner for approval`;
  const mailTransport = nodemailer.createTransport(smtpTransport({
    // service: mailerconfig.mailservice.service, // or use smtp, or GCP Service Account
    // auth: {
    //   user: mailerconfig.mailservice.email,
    //   pass: mailerconfig.mailservice.password
    // },
    host: mailerconfig.mailservice.host,
    port: mailerconfig.mailservice.port,
    secure: true,
    auth: {
      user: mailerconfig.mailservice.email,
      pass: mailerconfig.mailservice.password
    }
  }));
  mailTransport.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take our messages');
    }
  });

  const APP_EMAIL = mailerconfig.mailservice.replytoemail;
  const mailOptions = {
    from: `TTS ToolTime <${ APP_EMAIL }>`,
    to: `${ firstName } <${ email }>`,
    subject: `${ subject }`,
    html: `Hi ${ firstName }! <br> ${ message }!`
  };
  return mailTransport.sendMail(mailOptions);
}
