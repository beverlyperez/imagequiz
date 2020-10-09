import React from 'react';
import Login from './Login';
class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showLoginForm: false
        };

    }

    login = () => {
        this.setState({
            showLoginForm: true
        });

    }

    render(){
        if(this.state.showLoginForm){
            return (
                <div>
                    <form>
                        <button onClick={this.login}>Login</button>    
                        hello from the home page
                    
                    </form>
                    
                    </div>
    
            );

        }
        return (
            <div>
                <form>
                    <button onClick={this.login}>Login</button>    
                    hello from the home page
                
                </form>
                
                </div>

        );
    }

}

export default Home;