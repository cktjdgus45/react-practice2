import React, { useContext, useEffect, useState } from 'react';
import { getAuth, signOut, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe;
    })
    const auth = getAuth();
    const value = {
        currentUser,
        signUp,
        login,
        logout
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    function logout(email, password) {
        return signOut(auth);
    }
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
