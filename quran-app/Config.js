import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyB5AnQGKsLxdEQgqk6DQr1DGv-eAslCq7c",
  authDomain: "quran-app-7508a.firebaseapp.com",
  databaseURL: "https://quran-app-7508a-default-rtdb.firebaseio.com",
  projectId: "quran-app-7508a",
  storageBucket: "quran-app-7508a.appspot.com",
  messagingSenderId: "367185050685",
  appId: "1:367185050685:web:b32a0ff5210af32b967e54"
};

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig)
}

export default firebase.database()