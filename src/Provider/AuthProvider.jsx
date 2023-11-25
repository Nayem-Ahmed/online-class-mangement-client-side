import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";



export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();

    const signupUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const signinUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const signingoogle = (email, password) => {
        setLoading(true)
        return signInWithPopup(auth,provider)

    }


    const logOut =()=>{
        setLoading(true)
        return signOut(auth)

    }

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,(currentuser)=>{
            setLoading(false)
            setUser(currentuser);
         });
         return()=>{
             unsubscribe();
         }
     },[])

    const userInfo = { user, signupUser,signinUser,signingoogle,logOut};

    return (

        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;