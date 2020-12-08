import React from 'react';
import './homePage.css';
import server from './server';
import {Link} from 'react-router-dom';
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
         const location = this.props.location;
        if(location){
            if(location.state){
                if(location.state.quiz){
                    quiz = location.state.quiz
                }
            }
        }
   
    return (
       
        <div className="home">
            <p>Quizes to take:</p>  
                {this.state.quizzes.map(q =>
                    <Link to = {{pathname: '/quiz', state:{quiz:q}}}>
                        <figure>
                            <img src={require('/images/'+q.picture)} alt={q.title}></img>
                            <figcaption>{q.title}</figcaption>
                        </figure>
                    </Link>)}
                
        </div>  
    );
        

    }

}

export default HomePage;

