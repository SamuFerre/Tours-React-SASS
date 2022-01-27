import TitleH2 from '../UI/TitleH2';
import RowSection from '../UI/RowSection';
import TourCard from './Tour-Card';

const TOURS = [
    {
        id: 'tf1',
        picture: 'tour-card__picture tour-card__picture--1',
        heading: 'tour-card__heading-span tour-card__heading-span--1',
        title: 'The sea  explorer',
        days: '3 days tours',
        people: 'Up to 30 people',
        guides: '2 tour guides',
        sleep: 'Sleep in cozzy hotels',
        difficulty: 'Difficulty: easy',
        card: 'tour-card__side tour-card__side--back tour-card__side--back--1',
        price: '$394',
    },
    {
        id: 'tf2',
        picture: 'tour-card__picture tour-card__picture--2',
        heading: 'tour-card__heading-span tour-card__heading-span--2',
        title: 'The forest hiker',
        days: '7 days tours',
        people: 'Up to 40 people',
        guides: '6 tour guides',
        sleep: 'Sleep in provided tents',
        difficulty: 'Difficulty: medium',
        card: 'tour-card__side tour-card__side--back tour-card__side--back--2',
        price: '$497',
    },
    {
        id: 'tf3',
        picture: 'tour-card__picture tour-card__picture--3',
        heading: 'tour-card__heading-span tour-card__heading-span--3',
        title: 'The snow adventurer',
        days: '5 days tours',
        people: 'Up to 15 people',
        guides: '3 tour guides',
        sleep: 'Sleep in provided tents',
        difficulty: 'Difficulty: hard',
        card: 'tour-card__side tour-card__side--back tour-card__side--back--3',
        price: '$897',
    },
];

const Tours = props => {
    
    return (
        <section className="section-tours" id='section-tours'>
            <TitleH2 divClass="u-center-text u-margin-bottom-b" title="Most popular tours"/>

            <RowSection>
                {TOURS.map((tour) => (
                    <TourCard
                        key={tour.id}
                        picture={tour.picture}
                        heading={tour.heading}
                        title={tour.title}
                        days={tour.days}
                        people={tour.people}
                        guides={tour.guides}
                        sleep={tour.sleep}
                        difficulty={tour.difficulty}
                        card={tour.card}    
                        price={tour.price}
                        onShow={props.onShowPopup}
                />))}
            </RowSection>
            <div className='u-center-text'>
                <a href="/" className='btn btn--green u-margin-top'>Discover all tours</a> 
            </div>
        </section>
    )
}

export default Tours;