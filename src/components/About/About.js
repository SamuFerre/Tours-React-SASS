import TitleH2 from '../UI/TitleH2';
import RowSection from '../UI/RowSection';
import Paragraph from './Paragraph';
import Composition from './Composition';

const About = () => {
    return (
        <main>
            <section className="section-about">
                <TitleH2 divClass="u-center-text u-margin-bottom-b" title="Exiting tours for adventurous people" />
                <RowSection>
                    <Paragraph/>
                    <Composition/>
                </RowSection>
            </section>
        </main>
    );
};

export default About;