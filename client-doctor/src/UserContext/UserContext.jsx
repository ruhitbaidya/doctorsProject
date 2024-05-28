import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";

import UsePublicAxios from "../Hook/PublicAxios";

export const ContextProvid = createContext(null);

const UserContext = ({ children }) => {
const publicfetch = UsePublicAxios();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleLogin = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateuser = (displayName, photoLink) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoLink,
    });
  };

  const loginemialpass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutuser = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (person) => {
      setUser(person);
      setLoading(false);
      const {email} = person;
      if(person){
        publicfetch.post('/jwt', {email})
        .then((res)=> localStorage.setItem( "token", JSON.stringify(res.data.token)))
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  console.log(user);
  const infos = {
    googleLogin,
    updateuser,
    user,
    loading,
    logOutuser,
    loginemialpass,
  };
  return (
    <ContextProvid.Provider value={infos}>{children}</ContextProvid.Provider>
  );
};

export default UserContext;
