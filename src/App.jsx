import { useState } from 'react'
import './App.css'
import Header from './Header'
import CalculatorInput from './CalculatorInput'
import Table from './Table'

let defaultInvestmentParams = {
  initialInvestment: 10000,
  annualAddition: 1200,
  yearsToGrow: 10,
  interestRate: 5
}

function App()
{
  const [ investmentParams, setInvestmentParams ] = useState(defaultInvestmentParams)

  const futureValue = deriveFutureValue()

  function handleFieldInput(target, newAmount)
  {
    console.log(target)

    // let futureValue = 

    // console.log("future value: " + futureValue)

    // return calculateFutureValue() // TODO: Calculate and update the future value on the UI.
  }

  function deriveFutureValue()
  {
    let newValue = investmentParams.initialInvestment
    let contribution = investmentParams.annualAddition

    for (let i = 0; i < investmentParams.yearsToGrow; i++)
    {
      newValue = deriveFutureValueForSinglePeriod(newValue, investmentParams.interestRate) + contribution
    }

    return Math.round(newValue)
  }
  
  function deriveFutureValueForSinglePeriod(p, r)
  {
    r = r / 100
    let n = 1
    let t = 1
    return p * ((1 + (r / n)) ** (n * t))
  }

  return (
    <>
      <div className='container' style={{ maxWidth: 768 }}>
        <Header />
        <CalculatorInput />
        <Table />

        

      </div>
    </>
  )
}

export default App
