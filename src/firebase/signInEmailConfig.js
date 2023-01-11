
export const customActionCodeSettings = (org) => {
    const url_dev = `http://localhost:3000/#/${org}/indi`;
    const url_prod = `https://birthday-pe.github.io/ui/#/${org}/indi`;

    return {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: url_dev,
        // This must be true.
        handleCodeInApp: true,
    }
  };