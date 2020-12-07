//  TOP LEVEL CLOUD FUNCTIONS INDEX.TS             ======================
// ======================================================================

// import firebase from 'firebase';  THIS STYLE IMPORT PROVIDES TYPES: firebase.default.database.Query




// import * as auth from './auth/index';
import * as callable from './callable/index';
import * as fs from './firestore/index';



export const CreateNewAccount = callable.createNewAccount;




export const SyncItemToOwnerInventory = fs.syncItemStatusToOwnerInventory;
export const SyncNewReservationToLists = fs.syncNewReservationToLists;
