import { auth } from "../firebase/firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithRedirect
} from "firebase/auth";


const AuthContext = createContext();

const Provider = new GoogleAuthProvider()

export const useUserAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  // action
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

    const googleLogIn = () => {
        Provider.addScope("email")
        Provider.addScope("profile")
        await signInWithRedirect(auth, Provider)
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        register,
        logIn,
        logOut,
        user,
        googleLogIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
