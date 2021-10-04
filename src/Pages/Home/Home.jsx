import './style.scss'
import Clicker from '../../Components/Clicker/Clicker'

function Home(){
    var clicks = 0;

    function Clicked(){
        clicks += 1;
        console.log(clicks)
    }

    return(
        <div className="home-container">
            <h1 className="counter-text">{clicks}</h1>
            <Clicker onClick={Clicked}/>
        </div>
    );
}

export default Home