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
onSubmit = (currentState) => {	
    var amountCorrect = 0;          	
    for(var i = 1; i <= 6; i++) {	
        var radios = document.getElementsByName('q'+i);	
        for(var j = 0; j < radios.length; j++) {	
            var radio = radios[j];	
            if(radio.value == "correct" && radio.checked) {	
                amountCorrect++;	
            }	                }
        }
        this.setState({score: amountCorrect});	   
            
    
        }
    }
        export default questions;
