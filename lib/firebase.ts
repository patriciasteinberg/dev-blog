import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const firebaseConfig = {
  apiKey: publicRuntimeConfig.firebaseApiKey,
  authDomain: publicRuntimeConfig.authDomain,
  projectId: publicRuntimeConfig.projectId,
  storageBucket: publicRuntimeConfig.storageBucket,
  messagingSenderId: publicRuntimeConfig.storageBucket,
  appId: publicRuntimeConfig.appId,
  measurementId: publicRuntimeConfig.measurementId,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
