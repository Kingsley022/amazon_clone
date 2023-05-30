import Axios from "axios"
import { useQuery } from '@tanstack/react-query';
import CartCard from './../../common/cards/cartCard';
import'./products.css';

interface PropsInterface{
    category: string;
    isFirstRow: boolean;
}

interface rating{
    rate: number; 
}

interface DataInterface{
    id: number;
    category: string;
    image: string;
    title: string;
    rating: rating;
    description: string;
    price: number;
    quantity: number;
}



const Product = ({category, isFirstRow}:PropsInterface) => {

    const fetchProducts = async (category:string) =>{
        const response = await Axios.get<DataInterface[]>(`https://fakestoreapi.com/products/category/${category}?limit=4`);
        return response.data.map((product:DataInterface )=> ({ ...product, quantity: 1 }));
    }

    const {data:products, status} = useQuery(['category', category], () => fetchProducts(category));
    if(status === 'loading') {return  <h2>Loading...</h2>};
    if(status === 'error') {return <h2>Error Occured</h2>};

   return (
       <div className={`products ${isFirstRow && 'firstRow'}`}>
            {products?.map((product: DataInterface )=>(
                <div  key={product?.id}>
                    <CartCard  product={product as DataInterface}/>
                </div>
            ))}
       </div>
   );

}

Product.defaultProps = {
    isFirstRow: false,
}

 
export default Product;
