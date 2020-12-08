import React from 'react';
import './homePage.css';
import server from './server';
import {Link} from 'react-router-dom';
class quiz extends React.Component {

constructor(props){
    super(props);
    this.state = {
       cursor: 0,
       score: 0,
       lastAnswerCorrect: false
    };

}

componentDidMount(){
    let quiz = {};
    const location = this.props.location;
    if(location){
        if(location.state){
            if(location.state.quiz){
                quiz = location.state.quiz
            }
        }
    }
}

}

export default quiz;
