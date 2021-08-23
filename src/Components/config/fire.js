import firebase from 'firebase';
import 'firebase/auth';

const  firebaseConfig = {
    apiKey: "AIzaSyC3awrgNgoNAx6_EM26vNJoAX2elyzKtmY",
    authDomain: "blogreact-25e8d.firebaseapp.com",
    projectId: "blogreact-25e8d",
    storageBucket: "blogreact-25e8d.appspot.com",
    messagingSenderId: "134496777386",
    appId: "1:134496777386:web:5c2556399c2bc9eaeb0cd3",
    measurementId: "G-XGJMKKC99T"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  const auth = fire.auth();
const db = fire.firestore();

const resetpassword=async(email)=>{
  try {
      await auth.sendPasswordResetEmail(email);
      alert("reset link has been sent!");
    } catch (err) {
      alert("Enter an valid email address");
    }

}




export default fire;
export  { db,auth,resetpassword};




  