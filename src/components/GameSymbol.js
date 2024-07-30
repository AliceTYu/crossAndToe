// import styles from './GameSymbol.module.css';
import { SYMBOL_O, SYMBOL_X } from '../unit/type';

const GameSymbol = ({symbol}) => {
    const getSymbol = (symbol) => {
        if (symbol === SYMBOL_O) return 'symbol--o'
        if (symbol === SYMBOL_X) return 'symbol--x'
        return ''
      }

  return (
    <span className={getSymbol(symbol)}>{symbol}</span>
  )
}

export default GameSymbol;