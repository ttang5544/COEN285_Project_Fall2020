"use strict";
//  TOP LEVEL CLOUD FUNCTIONS INDEX.TS       ======================
// ======================================================================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddReservationToLists = exports.ManageItemOnLists = exports.setupNewAccount = void 0;
const admin = require("firebase-admin");
admin.initializeApp();
const auth = require("./auth/index");
const fs = require("./firestore/index");
exports.setupNewAccount = auth.setupNewAccount;
exports.ManageItemOnLists = fs.manageItemOnLists;
exports.AddReservationToLists = fs.addReservationToLists;
//# sourceMappingURL=index.js.map