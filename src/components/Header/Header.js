import logo from '../../img/logo-white.png';
import Heading from './Heading';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo-box">
                <img className="header__logo" src={logo} alt='logo'/>
            </div>
            <Heading/>
        </header>
    )
}

export default Header;