import React,{useState} from 'react';
import { Card,CardContent, Container } from '@material-ui/core'
import './styles/reset.css';
import {resetpassword} from './config/fire';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
const Resetpassword = () => {
    const[email,setEmail]=useState('');
    
    return (
        <div style={{paddingTop:"30px",justifyContent:"center"}}>
            <Navbar/>
            
            <div className="goback" style={{paddingBottom:"20px"}}>
          
          <Link to="/">
          <span>
            <i className="fa fa-chevron-left">
              <span>Go Back to Homepage</span>
              </i>
              </span>
              </Link>
             
      </div>
             
           <Container maxWidth="sm">
           
           <Card style={{maxWidth:"450px",boxShadow:"5px 2px 8px rgba(0,0,0)"}}>
                   <CardContent>
                   
               <div className="header">
                       <span><strong>Forget Password</strong></span>
                    
                  
               </div>
              
                       <div className="email">  
                       <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="text" class="form-control" placeholder="Enter your Email" aria-label="Email" onChange={(e)=>setEmail(e.target.value)} value={email} />
                        </div>
                       </div>
                       <div className="btnreset">
                       <button type="button" class="btn btn-primary" onClick={()=>resetpassword(email)}>Send Reset Link </button>

                       </div>
                   </CardContent>
               </Card>
           </Container>
        </div>
    )
}

export default Resetpassword
