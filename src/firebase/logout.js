import { getAuth } from "firebase/auth"
import { toaster } from "../components/toaster";
import { logoutFailed } from "../toasterMessages";
import { userLoggedInStatusKey, userSignInEmailKey } from "../sessionStorage";

export const logout = () => {
    getAuth().signOut().then(()=>{
        localStorage.setItem(userLoggedInStatusKey, false);
        localStorage.removeItem(userSignInEmailKey);
        window.location.reload();
    }).catch(()=>{
        toaster(0, logoutFailed);
    });
}