import { useState } from 'react';

const FlashCard = ({ flashcard }) => {
    const [flip, setFlip] = useState(false);
    return (
        <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
            <div className="front">
                {flashcard.questions}
                <div className="flashcard-options">
                    {flashcard.options.map(option => {
                        return <div className='flashcard-option'>{option}</div>
                    })}
                </div>
            </div>
            <div className="back">
                {flashcard.answer}
            </div>
        </div>
    )
}

export default FlashCard;