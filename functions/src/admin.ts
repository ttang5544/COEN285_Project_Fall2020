
import * as admin from 'firebase-admin';


var isInit: boolean;
var defaultApp: admin.app.App;

export function initApp(): admin.app.App {
  if (!isInit) {
    try {
      defaultApp = admin.initializeApp();
      isInit = true;
    } catch (e) {
    }
  }
  return defaultApp;
}

