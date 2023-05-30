interface PropsInterface{
    rating: number;
}

const Star = ({rating}:PropsInterface) => {
    const getStars = (rating:number) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating - fullStars >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        const stars = [];
    
        for (let i = 0; i < fullStars; i++) {            
            stars.push(<i key={i} className="fa fa-star rating"></i>);
        }
    
        if (hasHalfStar) {
            stars.push(<i key="half" className="fa fa-star-half-o rating"></i>);
        }
    
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<i key={`empty-${i}`} className="fa fa-star-o rating"></i>);
        }
    
        return stars;
    }
    
    return (
        <div className="rate">
                {getStars(rating)}
        </div>
    );
}
 
export default Star;