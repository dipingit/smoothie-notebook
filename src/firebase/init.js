 import firebase from 'firebase/app'
 import 'firebase/firestore'
 // Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCvyC6AqrsSXqlSAddydY7vx0RI7x-myWo",
  authDomain: "smoothies-e08e7.firebaseapp.com",
  databaseURL: "https://smoothies-e08e7.firebaseio.com",
  projectId: "smoothies-e08e7",
  storageBucket: "smoothies-e08e7.appspot.com",
  messagingSenderId: "621165953680",
  appId: "1:621165953680:web:0f9bb7bc5484c1dff64e15",
  measurementId: "G-RPT9Z6TJ8K"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

 //export firestore database

 export default firebaseApp.firestore()

// export const db = firebaseApp.firestore()
