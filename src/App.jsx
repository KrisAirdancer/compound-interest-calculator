import { useState } from 'react'
import './App.css'
import Header from './Header'
import UserInput from './UserInput'
import Table from './Table'

function App()
{
  const [ userInput, setUserInput ] = useState({
    principal: 15000,
    annualInvestment: 900,
    rate: 5.5,
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
          handleChange={handleChange}
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
