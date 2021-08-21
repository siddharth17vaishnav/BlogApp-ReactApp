import React,{Component} from 'react';
import './styles/login.css';
import logo from '../img/logo.png';
import fire from "./config/fire"
import { Button, Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {Link,Redirect} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Login extends Component {
    
  constructor(props)
    {
        super(props);
        this.handleChange= this.handleChange.bind(this);
        this.signup=this.signup.bind(this);
        this.state={
            email: "",
            password: "",
            error:""
        }
    }

    

        signup(e){
            e.preventDefault();
            fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
                console.log(u);
                alert('Success');
                <Redirect to="/home"/>
            }).catch((err)=>{
                console.log(err);
                
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
     <Container maxWidth="sm">
          <div style={{paddingTop:"100px"}}>
              <Card >
                  <CardContent>
              <div className="header">
              <img className="logo" src={logo} alt="BlogApplogo"/>
              <h1>Register into BlogApp</h1>
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
                        <Button variant="outlined" color="primary" onClick={this.signup}>Register</Button>
                        </div>
                  </form>
                  <div className="newuser">
                      <span><Link to="/login">Already Have Account ! Login here</Link></span>
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
