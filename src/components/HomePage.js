import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom';
import './homePage.css';
import server from './server';
class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           username: '',
           quizzes: []
        };

    }
    componentDidMount(){
        server.fetchQuizzes().then(x => this.setState({quizzes: x})).catch(e => console.log(e));
    }


    render(){
        let username = '';
        const location = this.props.location;
        if(location){
            if(location.state){
                if(location.state.user){
                    username = location.state.user;
                }
            }
        }
   
    return (
       
        <div className="home">
            <p>Quizes to take:</p>  
            <Router> {this.state.quizzes.map(q =>
                    <Link to = {{pathname: '/quiz/', state:{quiz:q}}}>
                        <figure>
                            <img src={require("./images/" + q.picture)} alt={q.title}></img>
                            <figcaption>{q.title}</figcaption>
                        </figure>
                    </Link>)}
                    </Router>
        </div>  
    );
        

    }

}

export default HomePage;

