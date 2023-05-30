import './cards.css'

interface card {
    title: string,
    imgs: Array<{imgUrl:string, title:string, id:number}>,
    link:string
}
const CardTwo = ({title, imgs, link}:card) => {
    return (
        <div className="card cardTwo">
            <h2>{title}</h2>
            <div className="imgArea">
                {imgs.map(img =>(
                    <div className="images" key={img.id}>
                        <img src={img.imgUrl}/>
                        <p>{img.title}</p>
                    </div>
                ))}
            </div>
            <p className='link'>{link}</p>
        </div>
    );
}
 
export default CardTwo;

