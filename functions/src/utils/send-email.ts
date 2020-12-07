import * as mailerconfig from '../utils/mailerconfig.json';
import * as nodemailer from 'nodemailer';
import * as smtpTransport from 'nodemailer-smtp-transport';
import { BackendReservation } from './models';
import { HttpsError } from 'firebase-functions/lib/providers/https';


export function sendWelcomeEmail(email: string, firstName: string, uid: string) {
  const subject: string = mailerconfig.templates.all.welcome.subject;
  const message: string = mailerconfig.templates.all.welcome.message;
  const APP_EMAIL = mailerconfig.mailservice.replytoemail;
  const mailOptions = {
    from: `TTS ToolTime <${ APP_EMAIL }>`,
    to: `${ firstName } <${ email }>`,
    subject: `${ subject }`,
    html: `Hi ${ firstName }! <br> ${ message }!`
  };
  const mailTransport = nodemailer.createTransport(smtpTransport({
    host: mailerconfig.mailservice.host,
    port: mailerconfig.mailservice.port,
    secure: true,
    auth: {
      user: mailerconfig.mailservice.email,
      pass: mailerconfig.mailservice.password
    }
  }));
  return mailTransport.sendMail(mailOptions);
}



export function sendConfirmationEmails(
  resData: BackendReservation,
  item: { name: string, picture: string; },
  owner: { email: string, firstName: string, uid: string, picture?: string; },
  renter: { email: string, firstName: string, uid: string, picture?: string; }
) {
  const subject: string = mailerconfig.templates.all.welcome.subject;
  const message: string = mailerconfig.templates.all.welcome.message;
  const APP_EMAIL = mailerconfig.mailservice.replytoemail;
  const mailOptions = [{
    from: `TTS ToolTime <${ APP_EMAIL }>`,
    to: [`${ owner.firstName } <${ owner.email }>`],
    subject: `${ subject }`,
    html: `Hi ${ owner.firstName }! <br> ${ message }!`
  },
  {
    from: `TTS ToolTime <${ APP_EMAIL }>`,
    to: [`${ renter.firstName } <${ renter.email }>`],
    subject: `${ subject }`,
    html: `Hi ${ renter.firstName }! <br> ${ message }!`
  }];
  const mailTransport = nodemailer.createTransport(smtpTransport({
    host: mailerconfig.mailservice.host,
    port: mailerconfig.mailservice.port,
    secure: true,
    auth: {
      user: mailerconfig.mailservice.email,
      pass: mailerconfig.mailservice.password
    }
  }));
  return mailTransport.sendMail(mailOptions[0])
    .then(_ => mailTransport.sendMail(mailOptions[1]))
    .catch(e => {
      console.error('Error sending confirmation emails: ', e);
      throw new HttpsError('cancelled', 'ERROR sending confirmation emails');
    });
}
