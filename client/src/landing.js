import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Landing() {
  const [name, setName] = useState('');
  const history = useHistory();

  //Captures the users name and sends to it the gameBoard component through url params
  function handleClick(e) {
    e.preventDefault();
    history.push(`/game/${name}`);
  }
  return (
    <div className="landing_page">
      <h1>First things first, what's your name?</h1>
      <form>
        <input onChange={(e) => setName(e.target.value)} />
        <button className="submit_btn" onClick={(e) => handleClick(e)}>
          Start
        </button>
      </form>
    </div>
  );
}
