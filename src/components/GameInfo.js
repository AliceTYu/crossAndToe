import styles from './GameInfo.module.css';
import GameSymbol from './GameSymbol';

const GameInfo = (props) => {
  // мой вариант (но в блоке наоборот условия )
  // const isDraw = stepArray.includes(null) || winnerStep

  // вариант челика с ютуб
  // const isDraw = !winnerStep && stepArray.filter(value => value).length === 9
  const isDraw = !props.winnerStep && props.stepArray.filter(value => value).length === 9

  if (isDraw){
    return (
      <div className={styles.AppTitle}>
        Ничья
      </div>
    )
  }

  if (props.winnerSymbol){
    return (
      <div className={styles.AppTitle}>
        Победитель:  &nbsp; <GameSymbol symbol={props.winnerSymbol}/>
      </div>
    )
  }

  return (
    <div className={styles.AppTitle}>
      Ход:  &nbsp; <GameSymbol symbol={props.currentStep}/>
    </div>
  )
}

export default GameInfo;