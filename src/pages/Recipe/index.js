import "./index.css";
import onionRing from "./assets/onionRing.png"
import cake from "./assets/cake.png"
import roll from "./assets/roll.png"
import tost from "./assets/tost.png"
import tuna from "./assets/tuna.png"
import wrap from "./assets/wrap.png"
import greenWrap from "./assets/greenWrap.png"
import salad from "./assets/salad.png"
import pizza from "./assets/pizza.png"
import cheery from "./assets/cheery.png"
import smothi from "./assets/smothi.png"
import snaper from "./assets/snaper.png"
import Footer from "../../components/Footer";
import Header from "../../components/Header"


const Recipe = () =>{
    return(
        <div className="recipe">
            <Header/>
            <section className="recipe_page">
        <h2 className="recipe_heading">Trending Recipe</h2>
        <div className="recipe_card_warper">
            <img src={onionRing} className="recipe_card"></img>
            <img src={tost} className="recipe_card"></img>
            <img src={roll} className="recipe_card"></img>
            <img src={wrap} className="recipe_card"></img>
            <img src={tuna} className="recipe_card"></img>
            <img src={cake} className="recipe_card"></img>
            <img src={greenWrap} className="recipe_card"></img>
            <img src={salad} className="recipe_card"></img>
            <img src={pizza} className="recipe_card"></img>
            <img src={cheery} className="recipe_card"></img>
            <img src={smothi} className="recipe_card"></img>
            <img src={snaper} className="recipe_card"></img>
        </div>
      </section>
        <Footer/>
            </div>
    )
}

export default Recipe