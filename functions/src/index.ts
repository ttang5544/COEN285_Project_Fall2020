//  TOP LEVEL CLOUD FUNCTIONS INDEX.TS             ======================
// ======================================================================

import * as admin from 'firebase-admin';



admin.initializeApp();

import * as auth from './auth/index';
import * as fs from './firestore/index';

export const setupNewAccount = auth.setupNewAccount;
export const ManageItemOnLists = fs.manageItemOnLists;
export const AddReservationToLists = fs.addReservationToLists;
