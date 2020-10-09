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

class HomePage extends React.Component {

    render(){
        
        return (
            
            <div className="home">
                <p>help mee tho</p>
                <table>
                    <tr>
                        <td><img src={cherryblossom} alt = "cherry" height={100} width={100} />Cherry Blossom</td>
                        <td><img src={daffodil} alt = "daffodil" height={100} width={100} /> Daffodil </td>
                        <td><img src={daisy} alt = "daisy" height={100} width={100}/> Daisy </td>
                        <td><img src={lily} alt = "lily" height={100} width={100} /> Lily </td>
                        
                    </tr>
                    <tr>
                        <td><img src={rose} alt = "rose" height={100} width={100} /> Rose </td>
                        <td><img src={sunflower} alt = "sunflower" height={100} width={100} /> Sunflower </td>
                        <td><img src={tulip} alt = "tulip" height={100} width={100} /> Tulip </td>
                        <td><img src={waterlily} alt = "waterlily" height={100} width={100} /> WaterLily </td>
                        
                    </tr>
                </table>   
            </div>  
        );
    }

}

export default HomePage;