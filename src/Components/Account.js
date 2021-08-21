import React,{useState,useEffect} from 'react';
import fire, {auth,db} from './config/fire.js'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from "react-router";

const Account = () => {
    const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const history = useHistory();

 

  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.name);
    } catch (err) {
  
      
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");
    fetchUserName();
  }, [user, loading]);

  const signout=()=>{
      auth.signOut();
   
  }
   
    return (
        <div className="dashboard">
      <div className="dashboard__container">
        Logged in as
        <div>{name}</div>
        <div>{user?.email}</div>
        <button className="dashboard__btn" onClick={signout}>
          Logout
        </button>
      </div>
    </div>
    )
}

export default Account
