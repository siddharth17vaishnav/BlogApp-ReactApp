import React,{Component} from 'react';
import './styles/login.css';
import logo from '../img/logo.png';
import fire from "./config/fire"
import { Button, Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {Link, Redirect} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Navbar from './Navbar';


class Login extends Component {
    
  constructor(props)
    {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.state={
            email: "",
            password: "",
            error:""
        }
    }

    

    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u);
            alert('Success');
            <Redirect to="/home" />
        }).catch((err)=>{
            console.log(err);
            alert("Incorrect email or password");
             
        })
    }
      
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
   
     

render()
{
    
    return (

    <div>
        <Navbar/>
     <Container maxWidth="sm">
          <div style={{paddingTop:"100px"}}>
              <Card >
                  <CardContent>

                
              <div className="header">
              <img className="logo" src={logo} alt="BlogApplogo" style={{width:"88px"}}/>
              <h1>Login into BlogApp</h1>
              </div>
              <div className="forminput" style={{paddingTop:"20px"}}>
                <form >
                    <div className="email">
                      <TextField 
                            name="email"
                            variant="outlined"
                            label="Email"
                            type="email"
                            onChange={this.handleChange}
                            
                            />
                        </div>
                <div className="password" style={{paddingTop:"20px"}}>
                            <TextField 
                            name="password"
                            variant="outlined"
                            label="Password"
                            type="password"
                            id="outlined-basic"
                            onChange={this.handleChange}
                            
                            />
                        </div>
                       <div className="btnlogin">
                        <Button variant="outlined" color="primary" onClick={this.login}>Login</Button>
                        </div>
                  </form>
                  <div className="newuser">
                      <span><Link to="/resetpassword">Foreget Password ! Reset Here</Link></span>
                  </div>
                  <div className="newuser">
                      <span><Link to="/signup">New User ! Register here</Link></span>
                  </div>
              </div>
              </CardContent>
              </Card>
          </div>
      </Container>
    </div>

 
    )
}
}

export default Login;
