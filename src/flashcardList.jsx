import FlashCard from './flashcard';

const FlashCardList = ({ flashcards }) => {
    return (
        <div className='card-grid'>
            {
                flashcards.map(flashcard => {
                    console.log(flashcard)
                    return <FlashCard flashcard={flashcard} key={flashcard.id} />
                })
            }
        </div>
    )
}

export default FlashCardList;