import React from 'react';

import { Link } from 'react-router-dom';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            username: '',
            emailError: '',
            loginError: '',
            passwordError: '',
            passwordErrorClass: '',
            loginErrorClass: '',
            token: localStorage.getItem('token'),
            headerText: '',
            headerText2: ''
        }
        this.handleEmailChange=this.handleEmailChange.bind(this)
        this.handleNameChange=this.handleNameChange.bind(this)
        this.handlePasswordChange=this.handlePasswordChange.bind(this)
        this.check=this.check.bind(this)
        this.timeout = this.timeout.bind(this)
    }
    componentDidMount(){
       
    }
    timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }
    handleEmailChange(event) { 
        this.setState({email: event.target.value});
         }
    handleNameChange(event) { 
            this.setState({username: event.target.value});
         }
    handlePasswordChange(event){
        this.setState({password: event.target.value});
    }
    check(e,username,password){
        this.setState({passwordErrorClass: '',
        usernameError: '', passwordError: '', loginError: ''})

        if(username === '' || username === undefined){
            this.setState({passwordErrorClass: 'usernameError',
            emailError: 'Podaj poprawny email'})
            
        }
        
        if(password === '' || password === undefined){
            this.setState({passwordErrorClass: 'usernameError',
            passwordError: 'Podaj poprawne hasło'})
          
        }
        console.log(localStorage.getItem('invalid'))
        if(localStorage.getItem('invalid') === 'true'){     
            this.setState({loginError: 'Niepoprawne dane logowania',
            loginErrorClass: 'usernameError'})
        }
    }

    render(){
        return(
        <div>
            Login
            <Link to="/register" >Register</Link>
        </div>
        )

    }
}

export default Login;
