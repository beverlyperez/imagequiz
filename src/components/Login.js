import React from 'react';
import HomePage from './HomePage';
import './homePage.css';
import cherryblossom from './images/cherryblossom.png';
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
    
    handleChange = (event) =>{
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });

    }
  

    render(){
        if((!this.state.signedIn) && (!this.state.showHomePage)){
            return (
                <div>
                    <form onSubmit={this.onSubmit}>
                    <label>Username:</label>
                    <input 
                        type="text" 
                        name="username"
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
                <p>Welcome</p>
                <p className="user">{this.state.username}</p>
                <Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src="./images/lily.jpg"
  />
  <Figure.Caption>
            just a test
      </Figure.Caption>
</Figure>
                <img src={cherryblossom} alt = "cherry" height={50} width={50} text="cherry blossom"/>
            </div>

        );
    }

}

export default Login;