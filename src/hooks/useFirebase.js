import { useState } from "react";
import firebaseInitializeApp from "../firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

firebaseInitializeApp();
const useFirebase = () => {
    const [user, setUser] = useState({});

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const userSignOut = () => {
        signOut(auth).then(() => {
            setUser({});
            console.log('Sign-out successful.');
        })
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          console.log('User is signed out');
        }
    });

    return {
        user,
        googleSignIn,
        userSignOut
    }
}

export default useFirebase;