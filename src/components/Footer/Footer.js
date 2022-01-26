import logoSmall1x from '../../img/logo-green-small-1x.png';
import logoSmall2x from '../../img/logo-green-small-2x.png';
import logoBig1x from '../../img/logo-green-1x.png';
import logoBig2x from '../../img/logo-green-2x.png';
import Columns from '../UI/Columns';
import RowSection from '../UI/RowSection';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <picture>
                    <source media="(max-width: 37.5em)" srcSet={`${logoSmall1x} 1x, ${logoSmall2x} 2x`} />
                    <img 
                        srcSet={`${logoBig1x} 1x, ${logoBig2x} 2x`}
                        alt="logo1" 
                        className='footer__logo'
                        src={logoBig2x}
                    />
                </picture>
            </div>
            <RowSection>
                <Columns classes="col-1-of-2">
                    <div className='footer__navigation'>
                        <ul className='footer__list'>
                            <li className='footer__item'>
                                <a className='footer__link' href='/'>Company</a>
                            </li>
                            <li className='footer__item'>
                                <a className='footer__link' href='/'>Contact us</a>
                            </li>
                            <li className='footer__item'>
                                <a className='footer__link' href='/'>Carrers</a>
                            </li>
                            <li className='footer__item'>
                                <a className='footer__link' href='/'>Privacy Policy</a>
                            </li>
                            <li className='footer__item'>
                                <a className='footer__link' href='/'>Terms</a>
                            </li>
                        </ul>
                    </div>
                </Columns>
                <Columns classes="col-1-of-2">
                    <p className='footer__copyright'>
                        Built by <a className='footer__link' href='/'>Samu Marquez</a> | Following an Udemy course
                        <br/>&copy; copyright all rights reserved | Using React and SASS 2022
                    </p>
                </Columns>
            </RowSection>
        </footer>
    );
};

export default Footer;