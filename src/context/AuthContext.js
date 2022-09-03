import { Auth } from "../firebase/firebase-config";
import { useContext, createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";

const AuthContext = createContext();

const Provider = new GoogleAuthProvider();

export const useUserAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  // action
  const register = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  };

  const googleLogIn = () => {
    Provider.addScope("email");
    Provider.addScope("profile");
    return signInWithRedirect(Auth, Provider);
  };

  const logOut = () => {
    return signOut(Auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        logIn,
        logOut,
        register,
        googleLogIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
