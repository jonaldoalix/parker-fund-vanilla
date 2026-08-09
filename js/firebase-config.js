/** Parker Fund Firebase web config (client SDK keys are public by design). */
export const firebaseConfig = {
  apiKey: "AIzaSyCmhTpHfpGQGp7hRbTIRs_64z0Bt35cg5s",
  authDomain: "parker-fund.firebaseapp.com",
  projectId: "parker-fund",
  storageBucket: "parker-fund.appspot.com",
  messagingSenderId: "868659832478",
  appId: "1:868659832478:web:a59ce6bf7d1f8e96f37d8f",
  measurementId: "G-R9Y06QD0QY",
};

export function isValidFirebaseWebConfig(config) {
  if (!config || typeof config !== "object") return false;
  const required = [
    "apiKey",
    "authDomain",
    "projectId",
    "storageBucket",
    "messagingSenderId",
    "appId",
  ];
  return required.every(
    (key) => typeof config[key] === "string" && config[key].length > 0,
  );
}
