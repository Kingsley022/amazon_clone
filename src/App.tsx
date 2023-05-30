import './App.css';
import Header from './common/header/header';
import Footer from './common/footer/footer';
import Home from './pages/home/home';
import Products from './pages/products/products';
import Cart from './pages/cart/cart';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';

export const AppContext = createContext({} as AppInterface);

interface AppInterface {
  isMenuToggled : boolean;
  handleMenuToggle : ()=> void;
  handleAddItem : (product:productsInterface)=> void;
  cartItems: productsInterface[];
  // setCartItems: () => Array<productsInterface>;
  setCartItems: React.Dispatch<React.SetStateAction<productsInterface[]>>;
}

interface rate{
  rate: number;
}

interface productsInterface{
  id: number;
  image: string;
  title: string;
  rating: rate;
  description: string;
  price: number;
  quantity: number;
}



function App() {
  const client = new QueryClient;
  const[isMenuToggled, setToggle] = useState<boolean>(false);
  const[cartItems,  setCartItems] = useState<productsInterface[]>([]);
  
  const handleMenuToggle = () => {
    setToggle(!isMenuToggled);
  }

  const handleAddItem = (product:productsInterface) => {
    const newCartItem:productsInterface = product;
    const newItems = [...cartItems, newCartItem];
    setCartItems(newItems);
  };



  return (
    <div className={isMenuToggled ? "is-active" : ''}>
      <AppContext.Provider value={{isMenuToggled, handleMenuToggle, handleAddItem, cartItems,  setCartItems}}>
        <QueryClientProvider client={client}>

          <BrowserRouter>

          <Header/>

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<h1>Page Not Found</h1>}/>
          </Routes>

          <Footer/>
            
          </BrowserRouter>
          
        </QueryClientProvider>
      </AppContext.Provider>
    
    </div>
  );
}

export default App;