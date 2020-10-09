import React from 'react';
import './homePage.css';

class HomePage extends React.Component {

    render(){
        
        return (
            
            <div className="home">
                <p>help mee tho</p>
                <table>
                    <tr>
                        <td><img src="./images/cherryblossom.png"> Cherry Blossom </img></td>
                        <td><img src="./images/daffodil.png"> Daffodil </img></td>
                        <td><img src="./images/daisy.jpg"> Daisy </img></td>
                        <td><img src="./images/lily.jpg"> Lily </img></td>
                        
                    </tr>
                    <tr>
                        <td><img src="./images/rose.png"> Rose </img></td>
                        <td><img src="./images/sunflower.png"> Sunflower </img></td>
                        <td><img src="./images/tulip.png"> Tulip </img></td>
                        <td><img src="./images/waterlily.png"> WaterLily </img></td>
                        
                    </tr>
                </table>   
            </div>  
        );
    }

}

export default HomePage;