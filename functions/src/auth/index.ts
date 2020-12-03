import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { firestoreInstance } from '../firestore';
export const auth = admin.auth();


export const setupNewAccount = functions.auth.user().onCreate(
  async (user, context) => {
    const uid = user.uid;
    const uemail = user.email;
    const uname = user.displayName || null;

    // init firestore/users
    const userRef = firestoreInstance.collection('users').doc(uid);
    await userRef.set({
      profile: {
        name: uname,
        email: uemail
      },
      items: [],
      reservations: []
    });
    return;
  }
);
