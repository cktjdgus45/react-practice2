import { useState, } from 'react';
import './app.css';
import FlashCardList from './flashcardList';

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'Qustion',
    answer: 'Answer',
    options: [
      'Answer1',
      'Answer2',
      'Answer3',
      'Answer4'
    ]
  },
  {
    id: 2,
    question: 'Qustion2',
    answer: 'Answer2',
    options: [
      'Answer1',
      'Answer2',
      'Answer3',
      'Answer4'
    ]
  },
  {
    id: 3,
    question: 'Qustion3',
    answer: 'Answer3',
    options: [
      'Answer1',
      'Answer2',
      'Answer3',
      'Answer4'
    ]
  },
]

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

  return (
    <>
      <FlashCardList flashcards={flashcards} />
    </>
  );
}
export default App;
