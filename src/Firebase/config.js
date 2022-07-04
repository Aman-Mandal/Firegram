// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBTkZoFju65-cKYD3dUvFdNz6bpcVtf8KA',
  authDomain: 'firegram-aman15.firebaseapp.com',
  projectId: 'firegram-aman15',
  storageBucket: 'firegram-aman15.appspot.com',
  messagingSenderId: '634223780156',
  appId: '1:634223780156:web:27c57dfb6c5b7fe6133e39',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const projectStorage = getStorage()
const projectFireStore = getFirestore()

export{projectFireStore, projectStorage} 