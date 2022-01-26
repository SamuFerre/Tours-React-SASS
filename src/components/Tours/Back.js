const Back = props => {
    return (
        <div className={props.card}>
            <div className="tour-card__cta">
                <div className="tour-card__price-box">
                    <p className="tour-card__price-only">Only</p>
                    <p className="tour-card__price-value">{props.price}</p>
                </div>
                {/* Hi haura que canviar es link the book now */}
                <a href="#popup" className="btn btn--white">Book now!</a>
            </div>
        </div>
    );
};

export default Back;