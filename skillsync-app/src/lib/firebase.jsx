// utils/firebase.js
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id"
};

function createFirebaseApp(config) {
  if (!getApps().length) {
    return initializeApp(config);
  } else {
    return getApp(); // if already initialized, use that one
  }
}

const app = createFirebaseApp(firebaseConfig);

export const analytics = getAnalytics(app);