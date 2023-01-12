import { initializeApp } from 'firebase/app';
import { doc, getFirestore, setDoc, getDoc, collection, getDocs, query } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDOYC0bU8-N9jk5Y5RRN4OTucuIzBIz9Cw",
    authDomain: "birthdaype.firebaseapp.com",
    databaseURL: "https://birthdaype-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "birthdaype",
    storageBucket: "birthdaype.appspot.com",
    messagingSenderId: "7829093541",
    appId: "1:7829093541:web:b70c08579274179a4e214c",
    measurementId: "G-WJ17W96Z75"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const getAllDocuments = async (collec) => {
    return await getDocs(query(collection(db, collec)));
}

export const getDocument = (collec, documentId) => {
    const docRef = doc(db, collec, documentId);
    return getDoc(docRef);
}

export const updateOrCreateDocument = async (collec, documentId, newDataObjectToBeMerged) => {
    // always pass author:email in the newDataObjectToBeMerged, used to the rule in sequirity rules for firestore
    const docRef = doc(db, collec, documentId);
    return setDoc(docRef, { ...newDataObjectToBeMerged}, { merge: true });
}