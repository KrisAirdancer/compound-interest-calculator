import './App.css'
import Header from './Header'
import CalculatorInput from './CalculatorInput'
import Table from './Table'

function App()
{
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
