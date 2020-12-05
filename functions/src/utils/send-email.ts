import * as mailerconfig from './mailerconfig.json';
import * as nodemailer from 'nodemailer';

// export function sendWelcomeVerificationEmail(email: string, uid: string, firstName = '', lastName = '') {
//   const displayName = `${ firstName } ${ lastName }`;
//   const mailTransport = nodemailer.createTransport({
//     service: mailerconfig.mailservice.service, // or use smtp, or GCP Service Account
//     auth: {
//       user: mailerconfig.mailservice.email,
//       pass: mailerconfig.mailservice.password
//     },
//   });
//   const APP_EMAIL = mailerconfig.mailservice.replytoemail;
//   const sendToName = firstName ? firstName + ' ' + lastName : '';
//   const mailOptions = {
//     from: `TTS ToolTime <${ APP_EMAIL }>`,
//     to: `${ sendToName } <${ email }>`,
//     subject: `Welcome to ToolTime!`,
//     html: `${ displayName } - Thanks for signing up for ToolTime. Your account has successfully been created!`
//   };
//   return mailTransport.sendMail(mailOptions);
// }


export function sendEmailMessage(
  email: string, uid: string, firstName: string,
  type: 'signup' | 'confirm' = 'signup',
  itemName?: string, ownerName?: string) {
  // const displayName = `${ firstName }`
  const subject: string = (type === 'signup') ? 'Welcome to ToolTime!' : `Your rental request is awaiting approval`;
  const message: string = (type === 'signup')
    ? `Thanks for signing up for ToolTime. Your account has successfully been created!`
    : `Your request to rent ${ ownerName ? `${ ownerName }'s` : 'a(n)' } ${ itemName } has been sent to the owner for approval`;
  const mailTransport = nodemailer.createTransport({
    service: mailerconfig.mailservice.service, // or use smtp, or GCP Service Account
    auth: {
      user: mailerconfig.mailservice.email,
      pass: mailerconfig.mailservice.password
    },
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


