import React from 'react';
import './homePage.css';
import server from './server';
import {Link} from 'react-router-dom';
class questions extends  React.Component{
    constructor(props){
    super(props);
    this.state = {
       cursor: 0,
       score: 0
    };
}



componentDidMount(){
    let quiz = {};
    const location = this.props.location;
    if(location){
        if(location.state){
            if(location.state.quiz){
                quiz = location.state.quiz;
                server.fetchQuestions(quiz.id).then(x => this.setState({ quiz: { questions: x } })).catch(e => console.log(e));
                
                
            }
        }
    }
}
onSubmit = (currentState) => {	
    var amountCorrect = 0;          	
    for(var i = 1; i <= 6; i++) {	
        var radios = document.getElementsByName('q'+i);	
        for(var j = 0; j < radios.length; j++) {	
            var radio = radios[j];	
            if(radio.value == "correct" && radio.checked) {	
                amountCorrect++;	
            }	                
        }
    }
        this.setState({score: amountCorrect});	   
            
    
}

render() {
    let quiz = this.state.quiz;
    if (quiz.questions.length === 0) {
        return (<div>Data is Loading</div>)
    }
    console.log(quiz.questions)
    console.log(this.state.cursor)
    return (<div>
        <div id='home'><Link to={{pathname:'/', state:{user: this.props.location.state.user}}} id='hometext'>ImageQuiz</Link></div>
        <div id='quiz'>
            <Question item={quiz.questions[this.state.cursor]} cursor={this.state.cursor}
                onAnswer={this.updateScore}></Question>
        </div>
        <div id='buttons'>
            <button onClick={this.goBack}>Back</button>
            <button onClick={this.goToNext}>Next</button>
        </div>
        <div id="score">Score: {this.state.score}/6</div>
    </div>
    );
}
}
        export default questions;
