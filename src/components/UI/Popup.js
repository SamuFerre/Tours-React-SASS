// import TitleH2 from '../UI/TitleH2';
import TitleH3 from '../UI/TitleH3';
import Button from '../UI/Button';
import nat8 from '../../img/nat-8.jpg';
import nat9 from '../../img/nat-9.jpg';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';

const portalElement = document.getElementById('overlays');

const Popup = (props) => {
    
    return(
        <Fragment>
            {ReactDOM.createPortal(
            <div className="popup" id='popup'>
                <div className="popup__content">
                    <div className="popup__left">
                        <img src={nat8} alt="tour" className='popup__img'/>
                        <img src={nat9} alt="tour" className='popup__img'/>
                    </div>
                    <div className="popup__right">
                        <a href='#section-tours' className='popup__close' onClick={props.onClose}>&times;</a>
                        <h2 className="heading-secondary u-margin-bottom-s">Start booking now</h2>
                        <TitleH3 title="Important &ndash; Please read these terms before booking"/>
                        <p className='popup__text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus felis non mi varius luctus. Integer tristique lorem elit, sit amet condimentum leo cursus eu. Donec in aliquet neque. Suspendisse quis ligula ut lectus ultricies pellentesque vel vitae nunc. Cras feugiat consequat neque, ac tempus sapien ornare et. Fusce tempus purus hendrerit libero ultricies, sed sodales enim ultrices. Etiam eget lacus mattis tortor accumsan luctus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus felis non mi varius luctus. Integer tristique lorem elit, sit amet condimentum leo cursus eu. Donec in aliquet neque. Suspendisse quis ligula ut lectus ultricies pellentesque vel vitae nunc. Cras feugiat consequat neque, ac tempus sapien ornare et. Fusce tempus purus hendrerit libero ultricies, sed sodales enim ultrices. Etiam eget lacus mattis tortor accumsan luctus.
                        </p>
                        <Button type="submit" classes='btn btn--green'>Book Now</Button>
                        <Button type="button" classes="btn btn--yellow" onClick={props.onClose}>Cancel</Button>
                    </div>
                </div>
            </div>, portalElement
            )}
        </Fragment>
    )
};

export default Popup;