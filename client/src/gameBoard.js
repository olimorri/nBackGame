import { useEffect, useState } from 'react';
import { getLetters } from './services/apiClientService';

export default function GameBoard(props) {
  //Given more time I would probably update this to a global state, but given the size of this application
  //I think the below makes it easier to follow
  const [letters, setLetters] = useState([]);
  const [displayLetter, setDisplayLetter] = useState();
  const [index, setIndex] = useState(0);
  const [letterFormat, setLetterFormat] = useState('display_letter');
  const [containerFormat, setContainerFormat] = useState('letter_container');
  const [matchedNumber, setMatchedNumber] = useState(0);
  const [errors, setError] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    //A randomly generated set of 25 letters from the server on page load
    getLetters().then((letters) => {
      setLetters([...letters]);
    });
    setName(props.match.params.name);
  }, []);

  useEffect(() => {
    setIndex(0);
  }, [letters]);

  useEffect(() => {
    //Ensures that the test ends once all letters have been seen
    if (index < letters.length) {
      test();
    }
  }, [letters, index]);

  // This is the logic for displaying the correct letter, setting the formatting and initializing the timing
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

  //This is where the logic for the user inputs are handled
  function handleClick(displayLetter) {
    //Here I take care of some edge cases and ensure a user cannot click twice on a single letter
    if (
      displayLetter === letters[index - 2] &&
      letters[index - 2] !== undefined &&
      clicked === false
    ) {
      setContainerFormat('letter_container true');
      setMatchedNumber(matchedNumber + 1);
      sendInteraction(true);
    } else {
      setContainerFormat('letter_container false');
      setError(errors + 1);
      sendInteraction(false);
    }
    setClicked(true);
  }

  function sendInteraction(status) {
    const userInteraction = { index: index, status: status, time: Date.now() };
    //this would then be sent as a post request to the server via the apiService
    return;
  }

  return (
    <div className="game_container">
      {letters.length && index === letters.length ? (
        <div>
          <h2>
            Well done! <br /> Here are your results...
          </h2>
          <p>Correct Matches: {matchedNumber}</p>
          <p>Incorrect Guesses: {errors}</p>
        </div>
      ) : (
        <>
          <div className={containerFormat}>
            <p className={letterFormat}>{displayLetter}</p>
          </div>
          <button onClick={() => handleClick(displayLetter)} className="game_button">
            Match?
          </button>
        </>
      )}
    </div>
  );
}
