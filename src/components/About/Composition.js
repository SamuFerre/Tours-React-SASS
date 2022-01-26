import p1 from '../../img/nat-1.jpg';
import p1L from '../../img/nat-1-large.jpg';
import p2 from '../../img/nat-2.jpg';
import p2L from '../../img/nat-2-large.jpg';
import p3 from '../../img/nat-3.jpg';
import p3L from '../../img/nat-3-large.jpg';
import Columns from '../UI/Columns';

const Composition = () => {
    return (
        <Columns classes="col-1-of-2">
            <div className="composition">
                <img
                  srcSet={`${p1} 300w, ${p1L} 1000w`}
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="nature1"
                  className="composition__photo composition__photo--p1"
                  src={p1L}
                />
                <img
                  srcSet={`${p2} 300w, ${p2L} 1000w`}
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="nature2"
                  className="composition__photo composition__photo--p2"
                  src={p2L}
                />
                <img
                  srcSet={`${p3} 300w, ${p3L} 1000w`}
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="nature3"
                  className="composition__photo composition__photo--p3"
                  src={p3L}
                />
                {/* <img className="composition__photo composition__photo--p1" src={p1} alt="p1"/>
                <img className="composition__photo composition__photo--p2" src={p2} alt="p2"/>
                <img className="composition__photo composition__photo--p3" src={p3} alt="p3"/> */}
            </div>
        </Columns>
    );
};

export default Composition;