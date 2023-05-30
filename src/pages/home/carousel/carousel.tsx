import { slides } from "../../../data";
import './carousel.css';
import { useEffect, useState } from 'react';

const Carousel = () => {
    const[currentIndex, setCurrentIndex] = useState(0);
    const[isAnimatePrev, setIsAnimatePrev] = useState(false);

    const isCurrentIndex = currentIndex === slides.length-1;
    useEffect(() =>{
        const interval = setInterval(() =>{
            setCurrentIndex(isCurrentIndex ? 0 : currentIndex+1);
        }, 5000)

        return () => clearInterval(interval);
    },[currentIndex]);
    
    const handleNext = () => {
       const checkIndex =  currentIndex === slides.length-1;
       const newIndex = checkIndex ? 0 : currentIndex +1;
       setCurrentIndex(newIndex);
       setIsAnimatePrev(false);
    }
    const handlePrev = () => {
        const checkIndex =  currentIndex === 0;
        const newIndex = checkIndex ? slides.length-1 : currentIndex -1;
        setCurrentIndex(newIndex);
        setIsAnimatePrev(true);
        setTimeout(() => {setIsAnimatePrev(false)}, 3000);
     }

    return (
        <div className="slides">
            <div className="btns">
                <div className="prev btn" onClick={handlePrev}>&#60;</div>
                <div className="next btn" onClick={handleNext}>&#62;</div>
            </div>
            {slides.map((slide, slideIndex) => (
                
                <div className={`slide ${currentIndex === slideIndex && 'currentSlide'}  ${isAnimatePrev && 'fadePrev'}`} key={slide.id}>
                    <img src={slide.url} />
                </div>
            ))}
        </div>
    );
}
 
export default Carousel;