import { initializeApp } from 'firebase/app';
import { getFirestore, collection} from 'firebase/firestore/lite';
// import { getAuth,createUserWithEmailAndPassword} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCQZE97BD89gOX0plZb7nnEXBzIdGPRC5E",
  authDomain: "live-chat-project-7a1ff.firebaseapp.com",
  projectId: "live-chat-project-7a1ff",
  storageBucket: "live-chat-project-7a1ff.appspot.com",
  messagingSenderId: "399824539617",
  appId: "1:399824539617:web:c206fdda179fe0ab658ca0"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 


// Get a list of cities from your database
const colRef = collection(db , "Posts")

export default {colRef,db};