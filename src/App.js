import {Component} from 'react';
import {Route,Switch} from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import fire from './Components/config/fire';
import signup from './Components/Signup';
import Account from './Components/Account';
import Reset from './Components/Resetpassword';




class App extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      user : {}
    }
  }
  componentDidMount()
  {
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        this.setState({user})
      }
      else{
        this.setState({user : null})
      }
    })
  }

  render(){
    return (
      <div>
     
        <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={signup}/>
      <Route path="/account" component={Account}/>
      <Route path="/resetpassword" component={Reset}/>
      
      { this.state.user ? ( <Home /> ) : ( <Login /> ) }
      </Switch>
      </div>
    );
  }
}

export default App;