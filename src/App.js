import {Component} from 'react';
import {Route,Switch} from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import fire from './Components/config/fire';
import signup from './Components/signup';
import data from './Components/data';


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
      <>
        <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={signup}/>
      { this.state.user ? ( <Home data={data} /> ) : ( <Login /> ) }
      </Switch>
      </>
    );
  }
}

export default App;