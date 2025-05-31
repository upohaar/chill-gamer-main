import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser]= useState(null)
   
    // console.log(user);

    const [loading, setLoading]=useState(true)

// REGISTER FROM
    const createUser = (email, password)=>{
       setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    
   
    // loge out
    const logout =()=>{
        setLoading(true)
        return signOut(auth)
    }
    // Login
    const userLogin =(email,password)=>{
        setLoading(true)
     return signInWithEmailAndPassword(auth, email, password)
    }
    // Google Login
    const SignInWithGoogle =()=>{
       return signInWithPopup(auth, provider)
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setLoading(false)
            setUser(currentUser)});
            return ()=>{
                unsubscribe()
            }
    },[])
    // theme
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.body.className = theme; // Apply the theme to the body element
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const userInfo ={
        user,
        setUser,
        loading,
        createUser,
        logout,
        userLogin,
        SignInWithGoogle,
        theme,
        setTheme,
        toggleTheme
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;