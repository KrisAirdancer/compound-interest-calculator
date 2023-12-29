import { useState } from 'react'
import './App.css'
import Header from './Header'
import UserInput from './UserInput'
import Table from './Table'
import { toDecimal, toInteger, formatAsCurrency } from './utils/calc'

const DEFAULT_INVESTMENT = {
  principal: 10000,
  annualInvestment: 1200,
  rate: 5.5,
  numPeriods: 10
}

function App()
{
  const [ userInput, setUserInput ] = useState(DEFAULT_INVESTMENT)

  const [ tableData, setTableData ] = useState(DEFAULT_INVESTMENT)

  function handleChange(inputId, newValue)
  {
      setUserInput(prevUserInput => { // Take in the previous userInput state to preserve unchanged values.
          return {
              ...prevUserInput, // Apply the old state by spreading the fields into the new object.
              [inputId]: newValue // Update only the field that was changed.
          }
      })
  }

  function handleSubmit(event)
  {
    event.preventDefault() // Prevent page reload on form submission.

    let newPrincipal = toInteger(event.target['principal'].value)
    let newAnnualInvestment = toInteger(event.target['annualInvestment'].value)
    let newNumPeriods = toInteger(event.target['numPeriods'].value)
    let newRate = toDecimal(event.target['rate'].value.toString())

    setTableData(() => {
      return {
        ['principal']: newPrincipal,
        ['annualInvestment']: newAnnualInvestment,
        ['rate']: newRate,
        ['numPeriods']: newNumPeriods
      }
    })

    setUserInput(() => {
      return {
        ['principal']: formatAsCurrency(newPrincipal),
        ['annualInvestment']: formatAsCurrency(newAnnualInvestment),
        ['rate']: newRate,
        ['numPeriods']: newNumPeriods
      }
    })
  }

  return (
    <>
      <div className='container' style={{ maxWidth: 768 }}>
        <Header />
        <UserInput
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          userInput={userInput}
        />
        <Table
          tableData={tableData}
        />
      </div>
    </>
  )
}

export default App
