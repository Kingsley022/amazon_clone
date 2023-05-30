import './cards.css';
interface card {
    title: string,
    url: string,
    link:string
}

const CardOne = ({title , url, link}:card) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <img src={url}></img>
            <p className='link'>{link}</p>
        </div>
    );
}
 
export default CardOne;