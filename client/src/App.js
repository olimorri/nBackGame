import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import GameBoard from './gameBoard';
import Landing from './landing';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Landing} exact />
            <Route path="/game/:name" render={(props) => <GameBoard {...props} />} />
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
