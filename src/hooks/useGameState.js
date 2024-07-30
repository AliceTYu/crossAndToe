import { useState } from "react"
import { SYMBOL_O, SYMBOL_X } from "../unit/type"

export function useGameState(){
    // const [stepArray, setStepArray] = useState([[null, null, null], [null, null, null], [null, null, null]])
    const [stepArray, setStepArray] = useState([null, null, null, null, null, null, null, null, null])
    const [currentStep, setCurrentStep] = useState(SYMBOL_O)
    const [winnerStep, setWinnerStep] = useState()

  const clickBtn = (index) => {
    if (stepArray[index] || winnerStep){
      return
    }
    const stepCopy = stepArray.slice()
    stepCopy[index] = currentStep
    setStepArray(stepCopy)

    const winner = computWinner(stepCopy)

    setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O)
    setWinnerStep(winner)
  }

  const computWinner = (step) =>{
    const winnerArray = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i = 0; i < winnerArray.length; i++){
      const [a, b, c] = winnerArray[i]
      if (step[a] &&
        step[a] === step[b] &&
        step[b] === step[c]
      ) {
        return [a, b, c]
      }
    }
  }  

  const winnerSymbol = winnerStep ? stepArray[winnerStep[0]] : undefined

  const resetPlay = () => {
    // мой вариант придуманный
    // const copyArray = stepArray.slice()
    // for (let i = 0; i < stepArray.length; i++){
    //   copyArray[i] = null
    // }
    // setStepArray(copyArray)
    
    // челика с ютуб
    // реализация массива из длины и значений
    setStepArray(Array.from({length: 9}, () => null))
    setWinnerStep(undefined)
  }

  return {
    stepArray,
    currentStep,
    winnerStep,
    clickBtn,
    winnerSymbol,
    resetPlay
  }
}