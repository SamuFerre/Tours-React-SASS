import Columns from '../UI/Columns';
import Back from './Back';
import Front from './Front';

export const TOURS = [
    {
        id: 'tf1',
        picture: 'tour-card__picture tour-card__picture--1',
        heading: 'tour-card__heading-span tour-card__heading-span--1',
        title: 'The sea  explorer',
        days: '3 days tours',
        people: 'Up to 30 people',
        guides: '2 tour guides',
        sleep: 'sleep in cozzy hotels',
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
        sleep: 'sleep in provided tents',
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
        sleep: 'sleep in provided tents',
        difficulty: 'Difficulty: hard',
        card: 'tour-card__side tour-card__side--back tour-card__side--back--3',
        price: '$897',
    },
];

const TourCard = props => {
    return(
        <Columns classes="col-1-of-3">
            <div className="tour-card">
                <Front
                    key={props.id}
                    picture={props.picture}
                    heading={props.heading}
                    title={props.title}
                    days={props.days}
                    people={props.people}
                    guides={props.guides}
                    sleep={props.sleep}
                    difficulty={props.difficulty}
                />
                <Back
                    card={props.card}    
                    price={props.price}
                />
            </div>
        </Columns>
    )
}

export default TourCard;