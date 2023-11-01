import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import {
  getFirestore,
  collection,
  query,
  collectionGroup,
  where,
  getDocs,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
//import { email } from "./script.js";

const firebaseConfig = {
  apiKey: "AIzaSyD9hXMxcvs5mW_E3QdxpdGzTBEnD7rGuTg",
  authDomain: "edtc-31a57.firebaseapp.com",
  projectId: "edtc-31a57",
  storageBucket: "edtc-31a57.appspot.com",
  messagingSenderId: "857312271635",
  appId: "1:857312271635:web:94ade54642719fbb5acee6",
  measurementId: "G-D025T4132H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const userEmail = localStorage.getItem("userEmail");
var mail = userEmail;
console.log(mail);

document.addEventListener("DOMContentLoaded", function () {
  const db = getFirestore();
  const colRef = collection(db, "profile");

  getDocs(colRef)
    .then((snapshot) => {
      let profile = [];
      snapshot.docs.forEach((doc) => {
        profile.push({ ...doc.data(), id: doc.id });
      });
      console.log(profile);
    })
    .catch((err) => {
      console.log(err.message);
    });

  const docRef = doc(db, "profile", mail);

  ////////
  // Assuming you have the docRef reference for the document
  const documentRef = doc(db, "profile", mail);

  // Get a reference to the subcollection within the document
  const subcollectionRef = collection(documentRef, "examduty");

  const dataElement4 = document.getElementById("dataElement4");
  const dataElement5 = document.getElementById("dataElement5");
  const dataElement6 = document.getElementById("dataElement6");
  const dataElement61 = document.getElementById("dataElement61");
  const dataElement7 = document.getElementById("dataElement7");

  // Query and log the documents within the subcollection
  async function logSubcollectionDocuments() {
    const querySnapshot = await getDocs(subcollectionRef);

    querySnapshot.forEach((doc) => {
      console.log("Document ID:", doc.id);
      console.log("Document Data:", doc.data());

      dataElement4.innerHTML = `Date: ${doc.data().date}`;
      dataElement5.innerHTML = `Time: ${doc.data().time}`;
      dataElement6.innerHTML = `Institution: ${doc.data().clg}`;
      dataElement61.innerHTML = `Subject: ${doc.data().subject}`;
      daydate(doc.data().date);
      // scheduleEmail();
      dataElement7.innerHTML = `Branch: ${doc.data().place}`;
    });
  }

  logSubcollectionDocuments();

  // //////

  /////////////////////888888888///////////////////////

  ////////
  // Assuming you have the docRef reference for the document
  const document1Ref = doc(db, "profile", mail);

  // Get a reference to the subcollection within the document
  const subcollection1Ref = collection(document1Ref, "examschedule");
  const schedule2DocumentRef = doc(subcollection1Ref, "examschedule");

  const dataElement8 = document.getElementById("dataElement8");
  const dataElement9 = document.getElementById("dataElement9");
  const dataElement10 = document.getElementById("dataElement10");
  const dataElement11 = document.getElementById("dataElement11");
  const dataElement12 = document.getElementById("dataElement12");

  getDoc(schedule2DocumentRef)
    .then((doc) => {
      if (doc.exists()) {
        const data = doc.data();

        console.log("Document ID:", doc.id);
        console.log("Document Data:", doc.data());

        dataElement8.innerHTML = `${doc.data().one}`;
        dataElement9.innerHTML = `${doc.data().two}`;
        dataElement10.innerHTML = `${doc.data().three}`;
        dataElement11.innerHTML = `${doc.data().four}`;
        dataElement12.innerHTML = `${doc.data().five}`;
      } else {
        console.log("schedule1 Document not found.");
      }
    })
    .catch((error) => {
      console.error("Error fetching schedule1 Document:", error);
    });

  ///////////////

  const subcollection2Ref = collection(document1Ref, "examschedule");
  const schedule1DocumentRef = doc(subcollection2Ref, "schedule1");

  // Retrieve data from schedule1 document
  getDoc(schedule1DocumentRef)
    .then((doc) => {
      if (doc.exists()) {
        const data = doc.data();
        console.log("Data from schedule1 Document:", data);
      } else {
        console.log("schedule1 Document not found.");
      }
    })
    .catch((error) => {
      console.error("Error fetching schedule1 Document:", error);
    });

  // Query and log the documents within the subcollection
  // async function logSubcollection2Documents() {
  //   const querySnapshot = await getDocs(subcollection2Ref);

  //   querySnapshot.forEach((doc) => {
  //     console.log("Document ID:", doc.id);
  //     console.log("Document Data:", doc.data());
  //   });
  // }

  // logSubcollection2Documents();

  //////////////////

  // //////
  /////////////////////////5555555555555555/////////////////////

  const dataElement1 = document.getElementById("dataElement1");
  const dataElement2 = document.getElementById("dataElement2");
  const dataElement3 = document.getElementById("dataElement3");

  getDoc(docRef)
    .then((doc) => {
      console.log(doc.data(), doc.id);
      dataElement1.innerHTML = `Name: ${doc.data().names}`;
      dataElement2.innerHTML = `Institution: ${doc.data().institution}`;
      dataElement3.innerHTML = `Branch: ${doc.data().branch}`;
    })
    .catch((err) => {
      console.log(err.message);
    });
});

function daydate(gotdate) {
  // Create a new Date object representing the current date and time
  const today = new Date();

  // Get the individual components of the date (year, month, day)
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // Months are 0-indexed, so add 1
  const day = today.getDate();

  // Format the date as a string
  const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${
    day < 10 ? "0" : ""
  }${day}`;

  console.log("Today's date:", formattedDate);

  /////////////////////////

  function reverseDate(dateString) {
    const parts = dateString.split("-");

    // Ensure that we have three parts (day, month, year)
    if (parts.length !== 3) {
      throw new Error("Invalid date format");
    }

    const day = parts[0];
    const month = parts[1];
    const year = parts[2];

    return `${year}-${month}-${day}`;
  }

  const originalDate = gotdate; // Original date in DD-MM-YYYY format
  const reversedDate = reverseDate(originalDate);

  console.log("Reversed date:", reversedDate);

  ///////////////////////////

  // Create two JavaScript Date objects
  const date1 = new Date(reversedDate); // First date
  const date2 = new Date(formattedDate); // Second date

  // Calculate the time difference in milliseconds
  const timeDifferenceMs = date1 - date2;
  // Convert milliseconds to days, hours, minutes, seconds, etc.
  const millisecondsPerSecond = 1000;
  const millisecondsPerMinute = 60 * millisecondsPerSecond;
  const millisecondsPerHour = 60 * millisecondsPerMinute;
  const millisecondsPerDay = 24 * millisecondsPerHour;

  const daysDifference = Math.floor(timeDifferenceMs / millisecondsPerDay);
  const hoursDifference = Math.floor(
    (timeDifferenceMs % millisecondsPerDay) / millisecondsPerHour
  );
  const minutesDifference = Math.floor(
    (timeDifferenceMs % millisecondsPerHour) / millisecondsPerMinute
  );
  const secondsDifference = Math.floor(
    (timeDifferenceMs % millisecondsPerMinute) / millisecondsPerSecond
  );

  console.log(
    `Difference: ${daysDifference} days, ${hoursDifference} hours, ${minutesDifference} minutes, ${secondsDifference} seconds`
  );
  console.log(daysDifference);

  function sendMail() {
    var params = {
      email: mail,
      message: `You have only ${daysDifference} days remaining for your next invigilation`,
    };

    const serviceID = "service_ib8cunn";
    const templateID = "template_6uthape";

    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        console.log(res);
        // alert("Your message sent successfully!!");
      })
      .catch((err) => console.log(err));
  }

  if (daysDifference < 5) {
    console.log("ji");
    sendMail();
  }
}
