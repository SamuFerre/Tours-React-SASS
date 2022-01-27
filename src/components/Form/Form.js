import Button from "../UI/Button";
import TitleH2 from "../UI/TitleH2";

const Form = () => {
    return (
        <form className="form">
            <TitleH2 title="Start booking now" divClass="u-margin-bottom-m" />
            <div className="form__group">
                <input id="fullName" type="text" className="form__input" placeholder="Full Name" required />
                <label className="form__label" htmlFor="fullName">Full Name</label>
            </div>
            <div className="form__group">
                <input id="email" type="email" className="form__input" placeholder="Email" required />
                <label className="form__label" htmlFor="email">E-mail</label>
            </div>
            <div className='form__group u-margin-bottom-m'>
                <div className='form__radio-group'>
                    <input name="size" id="small" type="radio" className="form__radio-input" />
                    <label className="form__radio-label" htmlFor="small">
                        <span className="form__radio-button"></span>
                        Small tour group
                    </label>
                </div>
                <div className='form__radio-group'>
                    <input name="size" id="large" type="radio" className="form__radio-input" />
                    <label  className="form__radio-label" htmlFor="large">
                        <span className="form__radio-button"></span>
                        Large tour group
                    </label>
                </div>
            </div>
            <div className="form-group">
                <Button type="submit" classes="btn btn--green">Send &rarr;</Button>
            </div>
        </form>
    )
}

export default Form;