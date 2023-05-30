import { useTruncate } from "../../hooks/useTroncate";
import { useContext } from 'react';
import { AppContext } from "../../App";
import ButtonTwo from "../buttons/buttonTwo";
import Star from "../star/star";
import './cards.css';



// component Interface

interface CardProps{
    product: productInterface;
}
interface productInterface{
    id: number;
    image: string;
    title: string;
    rating: rate;
    description: string;
    price: number;
    quantity: number;
    category: string;
}
interface rate{
    rate: number; 
}

const CartCard = ({product}:CardProps) => {

    const {truncate} = useTruncate();
    const {handleAddItem, cartItems} = useContext(AppContext);
    
    return (
        <div className="cartCard">
            <p className="category">{product?.category}</p>
            <img className="img" src={product?.image}/>
            <p className="title">{truncate(product?.title, 25)}</p>
            <Star rating={product?.rating?.rate}/>
            <p className="description">{truncate(product?.description, 65)}</p>
            <p className="price">${product?.price}</p>
            <ButtonTwo text="Add to Cart" handleClick={()=>handleAddItem(product)}/>
        </div>
    );
}
 
export default CartCard;