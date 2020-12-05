"use strict";
//  TOP LEVEL CLOUD FUNCTIONS INDEX.TS             ======================
// ======================================================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddReservationToLists = exports.ManageItemOnLists = exports.SendConfirmationEmail = exports.SetupNewAccount = void 0;
// import * as admin from 'firebase-admin';
// admin.initializeApp();
const auth = require("./auth/index");
const callable = require("./callable/index");
const fs = require("./firestore/index");
exports.SetupNewAccount = auth.setupNewAccount;
exports.SendConfirmationEmail = callable.sendRentalConfirmation;
exports.ManageItemOnLists = fs.manageItemOnLists;
exports.AddReservationToLists = fs.addReservationToLists;
//# sourceMappingURL=index.js.map