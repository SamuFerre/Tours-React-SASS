import Button from "../UI/Button";
const Back = props => {
    
    return (
        <div className={props.card}>
            <div className="tour-card__cta">
                <div className="tour-card__price-box">
                    <p className="tour-card__price-only">Only</p>
                    <p className="tour-card__price-value">{props.price}</p>
                </div>
                {/* Hi haura que canviar es link the book now */}
                <Button type="button" classes="btn btn--white" onClick={props.onClick}>Book now!</Button> 
            </div>
        </div>
    );
};

export default Back;