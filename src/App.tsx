
import './App.css'

// @Components
import Layout from './components/Layout/Layout'

import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../firebase-config';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional=


function App() {
initializeApp(firebaseConfig);
  return (
      <Layout/>
  )
}

export default App
