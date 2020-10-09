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

    handleChange = (event) => {


    }

    render(){
        if(this.state.signedIn && this.state.showHomePage){
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
                {this.state.signedIn ? 
                <form onSubmit={this.onSubmit}>
                    <label>Username:</label>
                    <input 
                        type="text" 
                        value={this.state.username} 
                        onChange={this.handleChange}
                    ></input>
                    <button className="loginButton" type="submit">Login</button>                
                </form> : <div> <HomePage /> </div>}
                
                </div>

        );
    }

}

export default Login;