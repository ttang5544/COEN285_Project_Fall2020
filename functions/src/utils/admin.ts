import * as admin from 'firebase-admin';

let isInit = false;

export async function initAdmin() {
  // if (!admin) {
  //   admin = await import('firebase-admin');
  // }
  if (!isInit) {
    try {
      admin.initializeApp();
      isInit = true;
    } catch (e) {
      console.error(e);
    }
  }
  return admin;
}
