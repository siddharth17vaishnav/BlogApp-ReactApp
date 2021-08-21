import React,{useState,useEffect} from 'react';
import  {auth,db} from './config/fire.js'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from "react-router";
import './styles/account.css';
import { Button, Card,CardContent, Container } from '@material-ui/core';
import profile from '../img/profile.png';
import {Link} from 'react-router-dom';

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
      <Container maxWidth="sm">
        <div className="goback">
          
            <Link to="/home">
            <span>
              <i className="fa fa-chevron-left">
                <span>Go Back to Homepage</span>
                </i>
                </span>
                </Link>
               
        </div>
          <div className="header">
        <h1>My Account</h1>
        </div>
        
        <div className="content" >
        <Card className="cardcontent">
          <CardContent>
        Logged in as:
        <div className="profilepic">
           <img src={profile} alt="profile"/>
         </div>
        <h1 style={{marginTop:"40px"}}>{user?.email}</h1>
        <div className="logoutbtn">
        <Button className="primary" variant="outlined" color="primary" style={{borderRadius:"20%"}} onClick={signout}>
          Logout
        </Button>
        </div>
        </CardContent>
        </Card>
        </div>
    </Container>
    )
}

export default Account
