import React from 'react';
import './homePage.css';
import cherryblossom from './images/cherryblossom.png';
import daffodil from './images/daffodil.png';
import daisy from './images/daisy.jpg';
import lily from './images/lily.jpg';
import rose from './images/rose.png';
import sunflower from './images/sunflower.png';
import tulip from './images/tulip.png';
import waterlily from './images/waterlily.png';

import videoGames from './images/VIDEOG.png';
import cn from './images/CN.jpg';
import hallow from './images/ZOMBIE.jpg';

import quizcn from './quizCN';

//Halloween
import witch from './images/WITCH.jpg';
import skull from './images/SKULL.jpg';
import spider from './images/SPIDER.jpg';
import ghost from './images/GHOST.jpg';
import jack from './images/JACK.png';
import fkstn from './images/FKSTN.jpg';

//Video Games
import king from './images/KING.png';
import spyro from './images/SPYRO.jpg';
import bios from './images/BIOS.jpg';
import jackn from './images/JACKND.jpg';
import sly from './images/SLY.jpg';
import unc from './images/UNC.jpg';

//Cartoons
import knd from './images/KND.jpg';
import power from './images/powerpuff.jpg';
import billy from './images/BM.jpg';
import cour from './images/CCD.png';
import eee from './images/EEE.jpg';
import dl from './images/DL.jpg';
class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quizCnCart: false,
            quizHall: false,
            quizVideoG: false, 
            results: false
        };

    }

    activateStateV = (event) => {
        if(!this.state.quizVideoG){
            this.setState({quizVideoG: true});
        }
        event.preventDefault();
    
    }
    activateStateH = (event) => {
        if(!this.state.quizHall){
            this.setState({quizHall: true});
        }
        event.preventDefault();
    
    }
    activateStateC = (event) => {
        if(!this.state.quizCnCart){
            this.setState({quizCnCart: true});
        }
        event.preventDefault();
    
    }

    render(){
        if((!this.state.quizCnCart) && (!this.state.quizHall) &&(!this.state.quizVideoG) && (!this.state.results)){
            return (
                
                <div className="home">
                    <p>Quizes to take:</p>  
                        <table className="pics">
                            <tr className="row1">
                                <td><img src={videoGames} onClick={this.activateStateV} alt = "vg" height={150} width={300} /> Video Games </td>
                                <td><img src={hallow} onClick={this.activateStateH} alt = "hw" height={150} width={300} /> Halloween </td>
                                <td><img src={cn} onClick={this.activateStateC} alt = "cn" height={150} width={300}/> Cartoon Network Cartoons </td>                        
                            </tr>
                        </table>
                        <br></br>
                    <table className="pics">
                        <tr className="row1">
                            <td><img src={cherryblossom} alt = "cherry" height={150} width={150} /> Cherry Blossom </td>
                            <td><img src={daffodil} alt = "daffodil" height={150} width={150} /> Daffodil </td>
                            <td><img src={daisy} alt = "daisy" height={150} width={150}/> Daisy </td>
                            <td><img src={lily} alt = "lily" height={150} width={150} /> Lily </td>
                            
                        </tr>
                        <tr className="row2">
                            <td><img src={rose} alt = "rose" height={150} width={150} /> Rose </td>
                            <td><img src={sunflower} alt = "sunflower" height={150} width={150} /> Sunflower </td>
                            <td><img src={tulip} alt = "tulip" height={150} width={150} /> Tulip </td>
                            <td><img src={waterlily} alt = "waterlily" height={150} width={150} /> WaterLily </td>
                            
                        </tr>
                    </table>
                
                </div>  
            );
        }
        if(this.state.quizCnCart){
            return (
                <div className="CNQ">
                    <h1>Which cartoon show from Cartoon Network, does the picture show?</h1>
                    <form id="quiz" onSubmit={this.onSubmit}>
                        
                        <img src={knd} alt = "kids" height={150} width={200} />
                        <input id="answer" type="radio" name="q1" value="wrong"> Billy and Mandy</input><br></br>
                        <input id="answer" type="radio" name="q1" value="correct"> Codename: Kids Next Door</input><br></br>
                        <input id="answer" type="radio" name="q1" value="wrong"> Power Puff Girls</input><br></br>
                        <input id="answer" type="radio" name="q1" value="wrong"> Drake and Josh</input><br></br>

                        <img src={power} alt = "power" height={150} width={200} />
                        <input id="answer" type="radio" name="q2" value="wrong"> The Heroes of Townsville</input><br></br>
                        <input id="answer" type="radio" name="q2" value="wrong"> Supers</input><br></br>
                        <input id="answer" type="radio" name="q2" value="wrong"> Patrick</input><br></br>
                        <input id="answer" type="radio" name="q2" value="correct">Power Puff Girls</input><br></br>

                        <img src={billy} alt = "bnm" height={150} width={200} />
                        <input id="answer" type="radio" name="q3" value="correct">Grim Adventures of Billy and Mandy</input><br></br>
                        <input id="answer" type="radio" name="q3" value="wrong"> Family Guy</input><br></br>
                        <input id="answer" type="radio" name="q3" value="wrong"> Amanda Show</input><br></br>
                        <input id="answer" type="radio" name="q3" value="wrong"> Shiny Teeth</input><br></br>

                        <img src={cour} alt = "ccds" height={150} width={200} />
                        <input id="answer" type="radio" name="q4" value="wrong"> Puppy</input><br></br>
                        <input id="answer" type="radio" name="q4" value="wrong"> Purple Dog</input><br></br>
                        <input id="answer" type="radio" name="q4" value="correct"> Courage the Cowardly Dog</input><br></br>
                        <input id="answer" type="radio" name="q4" value="wrong"> Nickelodeon</input><br></br>

                        <img src={eee} alt = "eds" height={150} width={200} />
                        <input id="answer" type="radio" name="q5" value="wrong"> Spongebob</input><br></br>
                        <input id="answer" type="radio" name="q5" value="wrong"> Cat Dog</input><br></br>
                        <input id="answer" type="radio" name="q5" value="wrong"> Hey Arnold!</input><br></br>
                        <input id="answer" type="radio" name="q5" value="correct"> Ed, Edd, and Eddy</input><br></br>

                        <img src={dl} alt = "dext" height={150} width={200} />
                        <input id="answer" type="radio" name="q6" value="wrong"> Scientists</input><br></br>
                        <input id="answer" type="radio" name="q6" value="correct"> Dexters Laboratory</input><br></br>
                        <input id="answer" type="radio" name="q6" value="wrong"> Power Puff Girls</input><br></br>
                        <input id="answer" type="radio" name="q6" value="wrong"> Battle Stations</input><br></br>

                        <button className="subButton" type="submit">Submit</button>                

                    </form>
                </div>
            );
        }
        else if(this.state.quizHall){
            return (
                <div className="HALL">
                    <h1>What is the name of this halloween item?</h1>
                    <form id="quiz" onSubmit={this.onSubmit}>
                        
                        <img src={witch} alt = "witch" height={150} width={200} />
                        <input id="answer" type="radio" name="q1" value="wrong"> Woman</input><br></br>
                        <input id="answer" type="radio" name="q1" value="correct"> Witch</input><br></br>
                        <input id="answer" type="radio" name="q1" value="wrong"> Troll</input><br></br>
                        <input id="answer" type="radio" name="q1" value="wrong"> Strangers in the night</input><br></br>

                        <img src={ghost} alt = "ghost" height={150} width={200} />
                        <input id="answer" type="radio" name="q2" value="wrong"> Bed sheet</input><br></br>
                        <input id="answer" type="radio" name="q2" value="wrong"> Human</input><br></br>
                        <input id="answer" type="radio" name="q2" value="wrong"> Spider</input><br></br>
                        <input id="answer" type="radio" name="q2" value="correct"> Ghost</input><br></br>

                        <img src={spider} alt = "spider" height={150} width={200} />
                        <input id="answer" type="radio" name="q3" value="correct"> Spider</input><br></br>
                        <input id="answer" type="radio" name="q3" value="wrong"> Chocho (bug)</input><br></br>
                        <input id="answer" type="radio" name="q3" value="wrong"> CuCuy (monster)</input><br></br>
                        <input id="answer" type="radio" name="q3" value="wrong"> Fly</input><br></br>

                        <img src={jack} alt = "jack" height={150} width={200} />
                        <input id="answer" type="radio" name="q4" value="wrong"> Orange</input><br></br>
                        <input id="answer" type="radio" name="q4" value="wrong"> Spider Web</input><br></br>
                        <input id="answer" type="radio" name="q4" value="correct"> Jackolantern</input><br></br>
                        <input id="answer" type="radio" name="q4" value="wrong"> Helper</input><br></br>

                        <img src={fkstn} alt = "fkstn" height={150} width={200} />
                        <input id="answer" type="radio" name="q5" value="wrong"> Dead guy</input><br></br>
                        <input id="answer" type="radio" name="q5" value="wrong"> Yolanda</input><br></br>
                        <input id="answer" type="radio" name="q5" value="wrong"> Neighbor</input><br></br>
                        <input id="answer" type="radio" name="q5" value="correct"> Frankenstein</input><br></br>

                        <img src={skull} alt = "skull" height={150} width={200} />
                        <input id="answer" type="radio" name="q6" value="wrong"> White</input><br></br>
                        <input id="answer" type="radio" name="q6" value="correct"> Skull</input><br></br>
                        <input id="answer" type="radio" name="q6" value="wrong"> Ghost</input><br></br>
                        <input id="answer" type="radio" name="q6" value="wrong"> Warrior</input><br></br>

                        <button className="subButton" type="submit">Submit</button>                

                    </form>
                </div>
            );
        }
        else if(this.state.quizVideoG){
            return (
                <div className="VG">
                    <h1>From which video game is the picture from?</h1>
                    <form id="quiz" onSubmit={this.onSubmit}>
                        
                        <img src={unc} alt = "unc" height={150} width={200} />
                        <input id="answer" type="radio" name="q1" value="wrong"> Farcry</input><br></br>
                        <input id="answer" type="radio" name="q1" value="correct"> Uncharted</input><br></br>
                        <input id="answer" type="radio" name="q1" value="wrong"> Devil in Disguise</input><br></br>
                        <input id="answer" type="radio" name="q1" value="wrong"> Unbelievable</input><br></br>

                        <img src={sly} alt = "sly" height={150} width={200} />
                        <input id="answer" type="radio" name="q2" value="wrong"> Racoon Adventures</input><br></br>
                        <input id="answer" type="radio" name="q2" value="wrong"> Spy Intruders</input><br></br>
                        <input id="answer" type="radio" name="q2" value="wrong"> Patrick the Hippo</input><br></br>
                        <input id="answer" type="radio" name="q2" value="correct"> Sly Cooper</input><br></br>

                        <img src={bios} alt = "bios" height={150} width={200} />
                        <input id="answer" type="radio" name="q3" value="correct"> Bioshock</input><br></br>
                        <input id="answer" type="radio" name="q3" value="wrong"> The Handy Man</input><br></br>
                        <input id="answer" type="radio" name="q3" value="wrong"> Dont do Drugs!</input><br></br>
                        <input id="answer" type="radio" name="q3" value="wrong"> Zombies</input><br></br>

                        <img src={king} alt = "king" height={150} width={200} />
                        <input id="answer" type="radio" name="q4" value="wrong"> Help Wanted</input><br></br>
                        <input id="answer" type="radio" name="q4" value="wrong"> Nathan Drake</input><br></br>
                        <input id="answer" type="radio" name="q4" value="correct"> Kingdom Hearts</input><br></br>
                        <input id="answer" type="radio" name="q4" value="wrong"> Disney</input><br></br>

                        <img src={spyro} alt = "spy" height={150} width={200} />
                        <input id="answer" type="radio" name="q5" value="wrong"> Naughty Dog</input><br></br>
                        <input id="answer" type="radio" name="q5" value="wrong"> Dragon</input><br></br>
                        <input id="answer" type="radio" name="q5" value="wrong"> The Future</input><br></br>
                        <input id="answer" type="radio" name="q5" value="correct"> Spyro</input><br></br>

                        <img src={jackn} alt = "jack" height={150} width={200} />
                        <input id="answer" type="radio" name="q6" value="wrong"> The Legacy</input><br></br>
                        <input id="answer" type="radio" name="q6" value="correct"> Jack and Daxter</input><br></br>
                        <input id="answer" type="radio" name="q6" value="wrong"> Crash Bash</input><br></br>
                        <input id="answer" type="radio" name="q6" value="wrong"> Bandicoot</input><br></br>

                        <button className="subButton" type="submit">Submit</button>                

                    </form>
                </div>
            );
        }
        if(this.state.results){
            return(
                <div className="Results">
                    <h1>Your results are: </h1>
                    <p> /6</p>
                    <button className="returnHome" type="">Go Home</button><br></br>
                    <button className="TryAgain" type="">Try Again</button><br></br>
                    
                </div>
            );
        }

    }

}

export default HomePage;