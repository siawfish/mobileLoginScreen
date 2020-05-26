import * as firebase from 'firebase'
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBXfhMPt8Ch89XFh4MdtTUblRL6bATmLa8",
    authDomain: "codetrain-68b40.firebaseapp.com",
    databaseURL: "https://codetrain-68b40.firebaseio.com",
    projectId: "codetrain-68b40",
    storageBucket: "codetrain-68b40.appspot.com",
    messagingSenderId: "51864833871",
    appId: "1:51864833871:web:623e911f438c5df8e8ff3a",
    measurementId: "G-8SK6VCEK3B"
  }

  firebase.initializeApp(firebaseConfig)

  export default firebase