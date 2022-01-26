import HeaderLink from '../UI/HeaderLink';

const Heading = () => {

    return (
        <div className="header__text-box">
            <h1 className="heading-primary">
                <span className="heading-primary--main">Outdoors</span>
                <span className="heading-primary--sub">is where life happens</span>
            </h1>
            <HeaderLink/>
            
        </div>
    )
}

export default Heading;