import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { firebaseConfig } from "./firebase-config.js";
import { initFirebase } from "./firebase-init.js";

initFirebase({
  initializeAppFn: initializeApp,
  getAnalyticsFn: getAnalytics,
  config: firebaseConfig,
});
