  import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
  import {getFirestore,collection,getDocs,doc,getDoc} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyD9hXMxcvs5mW_E3QdxpdGzTBEnD7rGuTg",
    authDomain: "edtc-31a57.firebaseapp.com",
    projectId: "edtc-31a57",
    storageBucket: "edtc-31a57.appspot.com",
    messagingSenderId: "857312271635",
    appId: "1:857312271635:web:94ade54642719fbb5acee6",
    measurementId: "G-D025T4132H"
  };


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const auth = getAuth(app);

//Login auth  
document.getElementById("login").addEventListener("click",function(){
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth,email,password)
  .then((userCredential)=> {
      const user = userCredential.user;
      console.log(user); // Accessing UID from user object
      alert("Logged in Successfully");
      localStorage.setItem('userEmail', email);
      window.location.href="resultpage.html";
      })

      .catch((error)=>{
        // const errorCode = error.code;
        // const errorMessage = errorMessage;
        // console.log(errorMessage);
        alert("Invalid Email or Password")
      })

});
