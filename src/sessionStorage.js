 
export const userLoggedInStatusKey = 'p@123jdifnlij##32';

export const getUserLoggedInStatus = () => {
   return localStorage.getItem(userLoggedInStatusKey);  
}