import SignBtn from '../buttons/buttonTwo';
import './cards.css';


interface card{
    title: string,
    img: string
}
const handleSignIn =()=>{
    console.log('Hello')
}
const TwoFaceCard = ({title, img}:card) => {
    return (
        <div className="twoFaceCard">
            <div className="txtArea">
                <h2>{title}</h2>
                <SignBtn text="Sign in securely" handleClick={handleSignIn}/>
            </div>

            <img src={img}/>
        </div>
    );
}
 
export default TwoFaceCard;