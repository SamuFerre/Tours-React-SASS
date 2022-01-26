import TitleH3 from '../UI/TitleH3';

const Testimonial = (props) => {
    return (
        <div className="story">
            <figure className="story__shape">
                <img className='story__image' src={props.image} alt='person on a tour' />
                <figcaption className='story__caption'>
                    {props.name}
                </figcaption>
            </figure>
            <div className="story__text">
                <TitleH3 title={props.title} />
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Testimonial;