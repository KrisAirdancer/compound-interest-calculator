import { useState } from 'react'
import './App.css'
import Header from './Header'

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
        <div className="row">
          <Header />
        </div>

        <div className="card p-2 mb-3 bg-secondary custom-shadow">
          {/* INPUT FIELDS */}
          <div className="row">

            <div className="col">
              <label htmlFor="initialInvestment" className="form-label custom-form-label">Initial Investment</label>
              <div className="input-group">
                <div className="input-group-text">$</div>
                <input onChange={(event) => { handleFieldInput(event.target.id, event.target.value) }} type="text" className="form-control custom-form-input" id='initialInvestment' defaultValue={10000} />
              </div>

              <label htmlFor="annualAddition" className="form-label custom-form-label">Annual Addition</label>
              <div className="input-group">
                <div className="input-group-text">$</div>
                <input onChange={(event) => { handleFieldInput(event.target.value) }} type="text" className="form-control custom-form-input" id='annualAddition' defaultValue={1200} />
              </div>

              <label htmlFor="yearsToGrow" className="form-label custom-form-label">Years to Grow</label>
              <input onChange={(event) => { handleFieldInput(event.target.value) }} type="text" className="form-control custom-form-input" id='yearsToGrow' defaultValue={10} />


              <label htmlFor="interestRate" className="form-label custom-form-label">Interest Rate</label>
              <div className="input-group">
                <input onChange={(event) => { handleFieldInput(event.target.value) }} type="text" className="form-control custom-form-input" id='interestRate' defaultValue={5} />
                <div className="input-group-text">%</div>
              </div>

              <label htmlFor="futureValue" className="form-label custom-form-label">Future Value</label>
              <div className="input-group">
                <div className="input-group-text">$</div>
                <input type="text" className="form-control custom-form-input" id='futureValue' value={futureValue} readOnly />
              </div>

            </div>

          </div>

          {/* TABLE */}
          <div className="row mt-2">
            <div className="col">
              {/* <div className="box"></div> */}
              <table className="table custom-table text-center" id='bootstrap-override'>
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Future Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Principal Invested</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>$10,000</td>
                    <td>$0</td>
                    <td>$0</td>
                    <td>$10,000</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>$12,000</td>
                    <td>$1,000</td>
                    <td>$1,000</td>
                    <td>$11,000</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>$14,000</td>
                    <td>$1,000</td>
                    <td>$1,000</td>
                    <td>$12,000</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>$16,000</td>
                    <td>$1,000</td>
                    <td>$1,000</td>
                    <td>$13,000</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>$18,000</td>
                    <td>$1,000</td>
                    <td>$1,000</td>
                    <td>$14,000</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>$20,000</td>
                    <td>$1,000</td>
                    <td>$1,000</td>
                    <td>$15,000</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>$22,000</td>
                    <td>$1,000</td>
                    <td>$1,000</td>
                    <td>$16,000</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>$24,000</td>
                    <td>$1,000</td>
                    <td>$1,000</td>
                    <td>$17,000</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>$26,000</td>
                    <td>$1,000</td>
                    <td>$1,000</td>
                    <td>$18,000</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>$28,000</td>
                    <td>$1,000</td>
                    <td>$1,000</td>
                    <td>$19,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
