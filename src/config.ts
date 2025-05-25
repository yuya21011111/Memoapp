import { initializeApp } from 'firebase/app'
import { initializeAuth,  getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import  ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
  apiKey: "AIzaSyACU4YnSLDvMeyihP-_OkZljXRZFvVvR1g",
  authDomain: "memoapp-bfdd5.firebaseapp.com",
  projectId: "memoapp-bfdd5",
  storageBucket: "memoapp-bfdd5.firebasestorage.app",
  messagingSenderId: "643580564076",
  appId: "1:643580564076:web:0dd9f62643ca2eeb05be49"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})

const db = getFirestore(app)

export { app, auth, db }