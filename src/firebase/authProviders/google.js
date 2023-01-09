import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { users } from "../../dbCollections";
import { userLoggedInStatusKey } from "../../sessionStorage";
import { db, updateDocument } from "../db";

const auth = getAuth();
const provider = new GoogleAuthProvider();
auth.languageCode = 'it';

export const googleSignInWithPopup = async () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        document.getElementsByTagName('body')[0].style.opacity = '0';
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(result.user);
        localStorage.setItem(userLoggedInStatusKey, 'true');
         window.location.reload();
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
}