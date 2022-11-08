import React, { useState, useEffect, createContext, useContext } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [authed, setAuthed] = useState(false);
  const [auth, setAuth] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      // console.log(user);
      if (user) {
        setUser(user);
      } else {
        setAuthed(false);
        setUser(null);
        navigate("/");
      }
    });
    setAuth(auth);
  }, [navigate]);

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
    setAuthed(true);
    navigate("/home");
  };

  const logout = async () => {
    signOut(auth);
    setAuthed(false);
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ authed, user, auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
