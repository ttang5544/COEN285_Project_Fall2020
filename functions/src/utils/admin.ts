import * as admin from 'firebase-admin';  // save to var, export admin?? ??
// let admin: firebase;
// if (!admin) {
//     admin = await import('firebase-admin');
//   }

let isInit: boolean;
// w/ lazy load import ???

export function initAdmin() {

  let adminApp;
  if (!isInit) {
    try {
      adminApp = admin.initializeApp();
      // adminApp.firestore().
      isInit = true;
    } catch (e) {
      // console.error(e);
    }
  }
  return admin;
}
