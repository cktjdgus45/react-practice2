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
            const answer = decodingString(questionItem.correct_answer);
            const options = [...questionItem.incorrect_answers.map(a => decodingString(a)), answer];
            return {
              id: `${index}-${Date.now()}`,
              questions: decodingString(questionItem.question),
              answer,
              options: options.sort(() => Math.random() - .5)
            }
          })
        )
      });
  }, [])

  function decodingString(str) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = str;
    return textArea.value;
  }

  return (
    <>
      <FlashCardList flashcards={flashcards} />
    </>
  );
}
export default App;
