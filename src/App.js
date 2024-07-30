import './App.css';
import GameInfo from './components/GameInfo';
import GameStep from './components/GameStep';
import { useGameState } from './hooks/useGameState';

function App() {
  const { stepArray, currentStep, winnerStep, clickBtn, winnerSymbol, resetPlay } = useGameState()

  return (
    <div className="App">
      <div className='AppBlock'>
        <GameInfo stepArray={stepArray} winnerSymbol={winnerSymbol} currentStep={currentStep} winnerStep={winnerStep}/>
        <div className='blocks'>
          {/* {stepArray.map((symbol, index) => (
            <div className='blockk'>
              {symbol.map((symb, index) => (
                <GameStep symbol={symbol} isWinner={winnerStep?.includes(index)} onClick={() => clickBtn(index)} />
              ))}</div>
          ))} */}

          {stepArray.map((symbol, index) => (
            <GameStep symbol={symbol} isWinner={winnerStep?.includes(index)} onClick={() => clickBtn(index)} />
          ))}
        </div>
        <div className='blockBtn'>
          <button className='btnReset' onClick={resetPlay}>Сброс</button>
        </div>
      </div>
    </div>
  );
}

export default App;
