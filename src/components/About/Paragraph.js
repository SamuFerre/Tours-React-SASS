import Columns from "../UI/Columns";
import TitleH3 from "../UI/TitleH3";

const Paragraph = () => {
    return (
        <Columns classes="col-1-of-2">
            <TitleH3 title="You're going to fall in love with nature" />
            <p className="paragraph">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut adipisci id ut, hic architecto nam, consectetur eveniet quisquam maxime, corporis fugit cumque temporibus recusandae beatae? Architecto itaque pariatur saepe quos?
            </p>
            <TitleH3 title="Live adventure like you have never before"/>
            <p className="paragraph">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut adipisci id ut, hic architecto nam. Aut adipisci id ut, hic architecto nam.
            </p> 
            <a className="btn-text" href="/home">Learn more &rarr;</a>
            </Columns>
    );
};

export default Paragraph;