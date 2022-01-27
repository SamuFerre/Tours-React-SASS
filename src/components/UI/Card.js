import Columns from "./Columns";

const Card = props => {
    return (
        <Columns classes="col-1-of-4">
            <div className='feature-box'>
                <i className={props.classes}></i>
                <h3 className='heading-tertiary u-margin-bottom-s'>{props.title}</h3>
                {/* <TitleH3 title={props.title} /> */}
                <p className='feature-box__text'>{props.description}</p>
            </div>
        </Columns>
    );
};

export default Card;