import { useContext } from 'react';
import { AppContext } from './../../App';
import ButtonTwo from '../../common/buttons/buttonTwo';
import './cart.css';

const Cart = () => {
    //Hooks
    const {cartItems, setCartItems} = useContext(AppContext);

    //Methods
    const handleCheckOut = () =>{
        alert("Thanks for shopping with us!!")
    };

    const handleIncrement =(id:Number)=>{
        const updatedCartItems = cartItems.map(item => {
            if(item.id === id) {
              return {...item, quantity: item.quantity + 1
              };
            } else {
              return item;
            }
          });
          setCartItems(updatedCartItems);
    };

    const handleDecrement =(id:Number)=>{
        const updatedCartItems = cartItems.map(item => {
            if(item.id === id && item.quantity > 1) {
              return {...item, quantity: item.quantity - 1
              };
            } else {
              return item;
            }
          });
          setCartItems(updatedCartItems);
    };

    const handleDelete = (id:Number) => {
        const newItems = cartItems.filter(cartItem => cartItem.id !== id);
        setCartItems(newItems);
    };


    //Summing up item prizes
    let total = 0;
    cartItems?.forEach(item =>{
        const subTotal = item?.quantity * item?.price;
        total += parseFloat(subTotal.toFixed(2));
    });

    //Methods End

    



    return (
        <div className="cartContainer">
            <div className="cartItems">
                <h2>Shopping Cart</h2>
                <p className='priceT'>price</p><br/>
                <div className="topborder"></div>

                {cartItems.map( item => (
                    <div className="item" key={item?.id}>
                        <img src={item?.image} />
                        <div className="features">
                            <p className="description">{item?.description}</p>
                            <div className="crud">
                                <div className="quantity">
                                    <p className='operator' onClick={() => handleDecrement(item?.id)}>-</p>
                                    <p className=''>{item.quantity}</p>
                                    <p className='operator' onClick={() => handleIncrement(item?.id)}>+</p>
                                </div>
                                <p className="deleteBtn" onClick={() => handleDelete(item?.id)}>Delete</p>
                            </div>
                        </div>
                        <p className='price'>${item?.price}</p>                
                    </div>
                ))}
                
                <p className='totals subTotal'>Subtotal: <span>${total}</span></p>

            </div>

            <div className="total">
                <p className='totals'>Total : <span>${total}</span></p>
                <ButtonTwo text='Proceed to chckout' handleClick={handleCheckOut}/>
            </div>
        </div>
    );
}
 
export default Cart;