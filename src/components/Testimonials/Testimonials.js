import TitleH2 from '../UI/TitleH2';
import RowSection from '../UI/RowSection';
import Testimonial from './Testimonial';
import nat8 from '../../img/nat-8.jpg';
import nat9 from '../../img/nat-9.jpg';
import videoMp4 from '../../img/video.mp4';
import videoWebm from '../../img/video.webm';

const TESTIMONIAL = [
    {
        id: "TT1",
        image: nat8,
        name: 'Mary Smith',
        title: 'I had the best week ever with my family',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut adipisci id ut, hic architecto nam, consectetur eveniet quisquam maxime, corporis fugit cumque temporibus recusandae beatae? Architecto itaque pariatur saepe quos. Lorem ipsum dolor sit, amet consecteturt.'
    },
    {
        id: "TT2",
        image: nat9,
        name: 'Jack Wilson',
        title: 'WOW! My life is completely different now!',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut adipisci id ut, hic architecto nam, consectetur eveniet quisquam maxime, corporis fugit cumque temporibus recusandae beatae? Architecto itaque pariatur saepe quos.'
    },
]

const Testimonials = () => {
    return (
        <section className='section-stories'>
            <div className='bg-video'>
                <video className='bg-video__content' autoPlay muted loop>
                    <source src={videoMp4} type='video/mp4' />
                    <source src={videoWebm} type='video/webm' />
                    Your browser is not supported!
                </video>
            </div>
            <TitleH2 divClass="u-center-text u-margin-bottom-b" title="We make people genuinely happy" />

            <RowSection>
                {TESTIMONIAL.map((testimonial) => (
                    <Testimonial
                        key={testimonial.id}
                        image={testimonial.image}
                        name={testimonial.name}
                        title={testimonial.title}
                        text={testimonial.text}
                />))}
            </RowSection>
            <div className='u-center-text'>
                <a href='/' className='btn-text'>Read All Stories &rarr;</a> 
            </div>
        </section>

    )
}

export default Testimonials;