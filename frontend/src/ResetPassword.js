import React from 'react';
import {Link} from 'react-router-dom';


class ResetPassword extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            uid: '',
            token: '',
            new_password1: '',
            new_password2: '',
            uidError: '',
            tokenError: '',
            password1Error: '',
            password2Error: '',
            password1ErrorClass: '',
            password2ErrorClass: '',
            page: 0,
        }
        this.handlePassword1Change=this.handlePassword1Change.bind(this)
        this.handlePassword2Change=this.handlePassword2Change.bind(this)
        this.handle_password_reset_confirm=this.handle_password_reset_confirm.bind(this)
    }
    handlePassword1Change(event) { 
        this.setState({new_password1: event.target.value});
    } 
    handlePassword2Change(event) { 
        this.setState({new_password2: event.target.value});
    }

    handle_password_reset_confirm = (e, data) => {
            e.preventDefault();
            fetch(this.props.apiUrl+'/auth/password/reset/confirm/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            })
              
          };
        
    render() {
        return(
            <div>
        Reset Password
        <Link to="/" >login</Link>
        </div>
        )
    }

}

export default ResetPassword;
