// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  // const firebaseConfig = {
  //   apiKey: "AIzaSyAu79jdgppnX8CrE0whVy_HCZ-8HLXeDV8",
  //   authDomain: "coffee-order-user.firebaseapp.com",
  //   projectId: "coffee-order-user",
  //   storageBucket: "coffee-order-user.appspot.com",
  //   messagingSenderId: "696565778507",
  //   appId: "1:696565778507:web:8e9846ecccb3612f41e5ce",
  //   measurementId: "G-SM81JKQMT3",
  // };

  // const app = initializeApp(firebaseConfig);

  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
