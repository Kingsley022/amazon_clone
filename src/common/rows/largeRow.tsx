import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState, useRef } from "react";

interface PropTypes{
    category: string,
    description: string
}

interface DataInterface{
    id: number;
    image: string;
}

interface Error {
    message: string;
}


const LargrRow = ({category, description}: PropTypes) => {

    const [scrollLeft, setScrollLeft] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);
    
    const fetchData = async (category: string) => {
        return await Axios.get<DataInterface[]>(`https://fakestoreapi.com/products/category/${category}`);
    };
    
    const { data, status } = useQuery(['category', category], () => fetchData(category));
    if (status === 'loading') {
        return <p>Loading...</p>;
    }
    
    if (status === 'error') {
        return <p>An error occurred</p>;
    }
    const products = data?.data;

    

  const handleScroll = (scrollOffset:number) => {
    const newScrollLeft = (scrollRef.current?.scrollLeft || 0) + scrollOffset;
    setScrollLeft(newScrollLeft);
    if (scrollRef.current) {
        scrollRef.current.scrollLeft = newScrollLeft;
    }
  };

    return (
        <div className="scrollBarContainer">
             
            <h2>{description}</h2>
            <div className="imgContainer" ref={scrollRef}>
                
                {products?.map( product => (
                    <img src={product?.image} key={product?.id}/>
                ))}
                {products.length > 3 && <div className="btns">
                    <div className="prev btn" onClick={() => handleScroll(-100)}>&#60;</div>
                    <div className="next btn" onClick={() => handleScroll(100)}>&#62;</div>
                </div>}

            </div>
                

        </div>
    );
}
 
export default LargrRow;