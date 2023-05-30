import './buttons.css';

interface Text{
    text: string,
    style: string
    handleClick: ()=> void;
}


const ButtonTwo = ({text, style, handleClick}:Text) => {
    return (
        <button className={`signInBtn ${style}`} onClick={handleClick}>{text}</button>
    );
}

ButtonTwo.defaultProps = {
    style : 'restyle',
}
 
export default ButtonTwo;