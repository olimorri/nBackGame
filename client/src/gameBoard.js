import { useEffect, useState } from 'react';
import { getLetters } from './services/apiClientService';

export default function GameBoard() {
  const [letters, setLetters] = useState([]);
  const [displayLetter, setDisplayLetter] = useState();
  const [index, setIndex] = useState(0);
  const [letterFormat, setLetterFormat] = useState('display_letter');
  const [containerFormat, setContainerFormat] = useState('letter_container');
  const [matchedNumber, setMatchedNumber] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [name, setName] = useState('');

  const maxCalls = 5;

  useEffect(() => {
    // getLetters().then((letters) => {
    //   setLetters([...letters]);
    // });
    setLetters(['A', 'A', 'A', 'B', 'C']);
  }, []);

  useEffect(() => {
    setIndex(0);
  }, [letters]);

  useEffect(() => {
    if (index < maxCalls) {
      test();
    }
  }, [letters, index]);

  // this displays the letter, triggers a timer and then triggers a change in active letters
  function test() {
    setLetterFormat('display_letter');
    setDisplayLetter(letters[index]);
    setTimeout(() => {
      setLetterFormat('no_display_letter');
    }, 750);
    setTimeout(() => {
      setIndex(index + 1);
      setClicked(false);
    }, 2500);
    setContainerFormat('letter_container');
  }

  function handleClick(displayLetter) {
    if (
      displayLetter === letters[index - 2] &&
      letters[index - 2] !== undefined &&
      clicked === false
    ) {
      setContainerFormat('letter_container true');
      setMatchedNumber(matchedNumber + 1);
    } else {
      setContainerFormat('letter_container false');
    }
    setClicked(true);
  }

  return (
    <div className="game_container">
      <div className={containerFormat}>
        <p className={letterFormat}>{displayLetter}</p>
      </div>
      <button onClick={() => handleClick(displayLetter)} className="game_btn">
        Match?
      </button>
    </div>
  );
}
