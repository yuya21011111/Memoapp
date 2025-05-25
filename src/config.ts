import { initializeApp } from 'firebase/app'
import { initializeAuth,  getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import  ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'



const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})

const db = getFirestore(app)

export { app, auth, db }