"use strict";
//  TOP LEVEL CLOUD FUNCTIONS INDEX.TS             ======================
// ======================================================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncNewReservationToLists = exports.SyncItemToOwnerInventory = exports.CreateNewAccount = void 0;
// import firebase from 'firebase';  THIS STYLE IMPORT PROVIDES TYPES: firebase.default.database.Query
// import * as auth from './auth/index';
const callable = require("./callable/index");
const fs = require("./firestore/index");
exports.CreateNewAccount = callable.createNewAccount;
exports.SyncItemToOwnerInventory = fs.syncItemStatusToOwnerInventory;
exports.SyncNewReservationToLists = fs.syncNewReservationToLists;
//# sourceMappingURL=index.js.map