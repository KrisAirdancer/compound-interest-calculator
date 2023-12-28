import { useState } from 'react'
import './App.css'
import Header from './Header'
import UserInput from './CalculatorInput'
import Table from './Table'

function App()
{
  const [ userInput, setUserInput ] = useState({
    principal: 10000,
    annualInvestment: 1200,
    rate: 5,
    numPeriods: 10
  })

  function handleChange(inputId, newValue)
  {
      setUserInput(prevUserInput => { // Take in the previous userInput state to preserve unchanged values.
          return {
              ...prevUserInput, // Apply the old state by spreading the fields into the new object.
              [inputId]: newValue // Update only the field that was changed.
          }
      })
  }

  return (
    <>
      <div className='container' style={{ maxWidth: 768 }}>
        <Header />
        <UserInput
          onChange={handleChange}
          userInput={userInput}
        />
        <Table
          userInput={userInput}
        />
      </div>
    </>
  )
}

export default App
