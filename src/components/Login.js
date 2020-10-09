import React from 'react';
import HomePage from './HomePage';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            showHomePage: false,
            signedIn: false
        };

    }

    onSubmit = (event) => {
        if(this.state.username.trim().length > 0){
            this.setState({signedIn: true});
        }
        event.preventDefault();
        

    }

  

    render(){

        if(!this.state.signedIn){
            return (
                <div>
                    <form onSubmit={this.onSubmit}>
                    <label>Username:</label>
                    <input 
                        type="text" 
                        value={this.state.username} 
                        onChange={this.handleChange}
                    ></input>
                    <button className="loginButton" type="submit">Login</button>                
                    
                    </form>
                    
                    </div>
    
            );

        }
        return (
            <div>
               
                <HomePage />
                
            </div>

        );
    }

}

export default Login;