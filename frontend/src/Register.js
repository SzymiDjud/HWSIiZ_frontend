import React from 'react';
import {Link} from 'react-router-dom';

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password1: '',
            password2: '',
            emailError: '',
            password1Error: '',
            password2Error: '',
            emailErrorClass: '',
            password1ErrorClass: '',
            password2ErrorClass: '',
        }
        this.handleEmailChange=this.handleEmailChange.bind(this)
        this.handlePassword1Change=this.handlePassword1Change.bind(this)
        this.handlePassword2Change=this.handlePassword2Change.bind(this)
        this.handle_signup=this.handle_signup.bind(this)
        this.resendEmail = this.resendEmail.bind(this)
    }
    handleEmailChange(event) { 
        this.setState({email: event.target.value});
         } 
    handlePassword1Change(event) { 
        this.setState({password1: event.target.value});
         } 
    handlePassword2Change(event) { 
        this.setState({password2: event.target.value});
         } 

    resendEmail(data){
        fetch(this.props.apiUrl+'/auth/registration/resend-email/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        )};
    handle_signup = (e, data) => {
            e.preventDefault();
            fetch(this.props.apiUrl+'/auth/registration/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            })
              .then(res => res.json())
              .then(json => {
                  this.setState({emailError: json.email})
                  if(this.state.emailError !== '' && this.state.emailError !== undefined){this.setState({emailErrorClass: 'emailError'})}
                  
                
              });
          };
        
    render(){
        return(
            <div className="registerMainContainer">
                        Register
                <div className="registerContainer">
                    <form onSubmit={e => this.handle_signup(e,this.state)}>
                        <input type="text" placeholder="Email"/>
                        <input type="text" placeholder="Password"/>
                        <button type="submit">Zarejestruj się</button>
                    </form>
                </div>
                <Link to="/" >Login</Link>
        </div>
        )

    }
}

export default Register;
