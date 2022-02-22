import { useState, useEffect } from 'react';
import FlashCardList from './flashcardList';
import axios from 'axios';
import './app.css';

function App() {
  const [flashcards, setFlashcards] = useState([]);
  console.log(flashcards)
  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=10')
      .then(res => {
        setFlashcards(
          res.data.results.map((questionItem, index) => {
            const answer = questionItem.correct_answer;
            const options = [...questionItem.incorrect_answers, answer];
            return {
              id: `${index}-${Date.now()}`,
              questions: questionItem.question,
              answer,
              options: options.sort(() => Math.random() - .5)
            }
          })
        )
      });
  }, [])

  return (
    <>
      <FlashCardList flashcards={flashcards} />
    </>
  );
}
export default App;
