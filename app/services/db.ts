import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDeLljy6J7Vb1qauSbGBJ_k17KobHqG688",
  authDomain: "instagram-web-3fef5.firebaseapp.com",
  projectId: "instagram-web-3fef5",
  storageBucket: "instagram-web-3fef5.appspot.com",
  messagingSenderId: "261001645088",
  appId: "1:261001645088:web:0eeae4eb63d3f610208045"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addUser = async ({email, password}:{
    email: string;
    password: string;
}) => {
    try {
        const docRef = await addDoc(collection(db, "usuarios"), {
          email,
          password,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}
