import './rows.css';
import CardOne from "../cards/cardone";
import TwoFaceCard from "../cards/twofacecard";
import LargrRow from "./largeRow";
import electronics from '../../utils/images/electronics.jpg';
import healthpersonalcare from '../../utils/images/healthpersonalcare.jpg';
import beauty from '../../utils/images/beauty.jpg';
import cartons from '../../utils/images/cartons.jpg';
import dresses from '../../utils/images/dresses.jpg';
import { cardTwoImgs } from '../../data';
import { cardTwoImgs2 } from '../../data';
import { cardTwoImgs3 } from '../../data';
import CardTwo from "../cards/cardtwo";



const Rows = () => {

    return (
        <>
            <div className="rows firstRow">
                <CardOne title="Electronics" url={electronics} link="See more"/>
                <CardOne title="Health & Personal Care" url={healthpersonalcare} link="See more"/>
                <CardTwo title="Shop Valentine's Day" imgs={cardTwoImgs3} link='See more'/>
                <TwoFaceCard title="Sign in for the best experience" img={cartons} />
            </div>
            
            <LargrRow category="men's clothing" description="Men's clothing" />

            <div className="rows">
                <CardOne title="Beauty Picks" url={beauty} link="Shop now"/>
                <CardTwo title="Shop Valentine's Day" imgs={cardTwoImgs} link='See more'/>
                <CardOne title="Dresses" url={dresses} link="Shop now"/>
                <CardTwo title="Shop Valentine's Day" imgs={cardTwoImgs2} link='See more'/>
            </div>

            <LargrRow category="electronics" description="Frequently repurchased in Electronics"/>
            <LargrRow category="women's clothing" description="Women's clothing" />
            
        </>
    );
}
 
export default Rows;