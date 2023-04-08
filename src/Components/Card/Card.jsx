import './Card.scss'
const Card = ({ title, body, img }) => {
    if (!img)
        img = "https://via.placeholder.com/150";
    if (!title)
        title = "Title";
    if (!body)
        body = "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
   
        return (
            <div className="card">  
            <div className="card__img-div">
                <img className='card__img' src={img} alt="image" />
            </div>
            <div className="card__content">
                <h3 className="card__title">{title}</h3>
                <div className='card__body-div'>
                    <p className="card__body">{body}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;