import { useState } from 'react'
import Header from './Header'
import UserInput from './UserInput'
import Table from './Table'
import { toDecimal, toInteger, formatAsCurrency, validateDecimalInput, validateIntegerInput } from './utils/calc'

const DEFAULT_INVESTMENT = {
  principal: 10000,
  annualInvestment: 1200,
  rate: 5.50,
  numPeriods: 10
}

function App()
{
  const [ userInput, setUserInput ] = useState({
                                                principal: formatAsCurrency(DEFAULT_INVESTMENT.principal),
                                                annualInvestment: formatAsCurrency(DEFAULT_INVESTMENT.annualInvestment),
                                                numPeriods: DEFAULT_INVESTMENT.numPeriods,
                                                rate: toDecimal(DEFAULT_INVESTMENT.rate).toFixed(2)
                                              })

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
    let newRate = toDecimal(event.target['rate'].value).toFixed(2)

    if (!validateDecimalInput(newPrincipal)) { newPrincipal = 0.0 }
    if (!validateDecimalInput(newAnnualInvestment)) { newAnnualInvestment = 0.0 }
    if (!validateIntegerInput(newNumPeriods)) { newNumPeriods = 1 }
    if (!validateDecimalInput(newRate)) { newRate = 0.0 }

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
