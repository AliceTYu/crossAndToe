import styles from './GameStep.module.css';
import GameSymbol from './GameSymbol';
import cn from 'classnames';

const GameStep = ({isWinner, symbol, onClick}) => {
    return (
        <button key={1} className={cn(styles.block, isWinner ? styles.blockWin : '')} onClick={onClick}>
        {symbol ? <GameSymbol symbol={symbol}/> : null}
        </button>)
}

export default GameStep;