import Form from '../Form/Form';
import RowSection from '../UI/RowSection';

const BookSection = () => {
    return (
        <section className='section-book'>
            <RowSection>
                <div className='book'>
                    <div className='book__form'>
                        <Form/>
                    </div>
                </div>
            </RowSection>
        </section>
    )
}

export default BookSection;