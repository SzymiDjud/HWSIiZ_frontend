import React from 'react';
import './main.css';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Login from './Login';
import Profile from './Profile';
import Register from './Register';
import ResetPassword from './ResetPassword';
import Home from './Home';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        displayed_form: '',
        logged_in: localStorage.getItem('token') ? true : false,
        username: '',
        email: '',
        apiUrl: 'http://127.0.0.1:8000',
        frontUrl: 'http://127.0.0.1:3000'
      };
    }

    handle_login = (e, data,username) => {
      e.preventDefault();
      this.setState({username: username});
      fetch(this.state.apiUrl+'/auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(json => {
          localStorage.setItem('invalid',false)
          localStorage.setItem('token', json.access_token);
          if(localStorage.getItem('token') === 'undefined')
          {
            console.log('in')
            localStorage.setItem('invalid',true)
          }
          this.setState({
            logged_in: true,
            displayed_form: ''
            
          });
         
        });
    };
  
    handle_logout = () => {
      localStorage.setItem('token','undefined');
      this.setState({ logged_in: false, username: '' });
    };

    

  render(){
    var isAuthenticated = false;

    if(localStorage.getItem('token')==='undefined' || localStorage.getItem('token') === null){
      isAuthenticated = false;
    }
    else{
      isAuthenticated = true;
    }
    console.log(React.version);
      return (
      <Router>
          <div className="App">
          <Switch>
            <PublicRoute exact path="/"  isAuthenticated={isAuthenticated}> <Login handle_login={this.handle_login}/></PublicRoute>
            <PublicRoute path="/Home"  isAuthenticated={isAuthenticated}> <Home handle_login={this.handle_login}/></PublicRoute>
            <PublicRoute path="/Profile"  isAuthenticated={isAuthenticated}> <Profile handle_login={this.handle_login}/></PublicRoute>
            <PublicRoute path="/Register" isAuthenticated={isAuthenticated} > <Register handle_signup={this.handle_signup} apiUrl={this.state.apiUrl}/> </PublicRoute>
            <PublicRoute path="/ResetPassword" isAuthenticated={isAuthenticated} > <ResetPassword handle_signup={this.handle_signup} apiUrl={this.state.apiUrl}/> </PublicRoute>
          </Switch>

          </div>
      </Router>
      
      );
  }
}

export default App;
