import Carousel from "../home/carousel/carousel";
import Product from "./product";
import './products.css';

const Products = () => {


    return (
        <>
            <Carousel/>
            <div className="productsContainer">
                <Product category="jewelery" isFirstRow={true} />
                <Product category="men's clothing"/>
                <Product category="electronics"/>
                <Product category="women's clothing"/>
            </div>
        </>
    );
}
 
export default Products;