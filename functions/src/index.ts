//  TOP LEVEL CLOUD FUNCTIONS INDEX.TS             ======================
// ======================================================================

// import * as admin from 'firebase-admin';
// admin.initializeApp();


// import * as auth from './auth/index';
import * as callable from './callable/index';
import * as fs from './firestore/index';

// export const SetupNewAccount = auth.setupNewAccount;


export const CreateNewAccount = callable.createNewAccount;
export const SendConfirmationEmail = callable.sendRentalConfirmation;




export const ManageItemOnLists = fs.manageItemOnLists;
export const AddReservationToLists = fs.addReservationToLists;
