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

class HomePage extends React.Component {

    render(){
        
        return (
            
            <div className="home">
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
                </table><br></br>
                <p>Quizes to take:</p>  
                    <table className="pics">
                        <tr className="row1">
                            <td><img src={videoGames} alt = "vg" height={150} width={150} /> Video Games </td>
                            <td><img src={hallow} alt = "hw" height={150} width={150} /> Halloween </td>
                            <td><img src={cn} alt = "cn" height={150} width={150}/> Cartoon Network Cartoons </td>                        
                        </tr>
                    </table>
            </div>  
        );
    }

}

export default HomePage;