import Card from '../UI/Card';
import RowSection from '../UI/RowSection';

const CARD_ARRAY= [
    {
        id: 'p1',
        classes: 'feature-box__icon icon-basic-world',
        title: 'Explore the World',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut adipisci id ut, hic architecto nam. Aut adipisci id ut, hic architecto nam.',
    },
    {
        id: 'p2',
        classes: 'feature-box__icon icon-basic-compass',
        title: 'Meet nature',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut adipisci id ut, hic architecto nam. Aut adipisci id ut, hic architecto nam.',
    },
    {
        id: 'p3',
        classes: 'feature-box__icon icon-basic-map',
        title: 'Find your way',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut adipisci id ut, hic architecto nam. Aut adipisci id ut, hic architecto nam.',
    },
    {
        id: 'p4',
        classes: 'feature-box__icon icon-basic-heart',
        title: 'Live a healthier life',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut adipisci id ut, hic architecto nam. Aut adipisci id ut, hic architecto nam.',
    },
];

const SectionFeatures = () => {
    return (
        <section className="section-features">
            <RowSection>
                {CARD_ARRAY.map((card) => (
                    <Card
                    key={card.id}
                    title={card.title}
                    classes={card.classes}
                    description={card.description}
                    />
                ))}
            </RowSection>
        </section>
    );
};

export default SectionFeatures;
