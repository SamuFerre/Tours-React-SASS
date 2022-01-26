const Front = props => {
    return (
        <div className='tour-card__side tour-card__side--front'>
            <div className={props.picture}>
                &nbsp;
            </div>
            <h4 className="tour-card__heading">
                <span className={props.heading}>{props.title}</span>
            </h4>
            <div className="tour-card__details">
                <ul>
                    <li>{props.days}</li>
                    <li>{props.people}</li>
                    <li>{props.guides}</li>
                    <li>{props.sleep}</li>
                    <li>{props.difficulty}</li>
                </ul>
            </div>
        </div>
    );
};

export default Front;