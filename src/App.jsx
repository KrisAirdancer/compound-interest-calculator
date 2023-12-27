import './App.css'

function App()
{
  return (
    <>
      <div className='container' style={{ maxWidth: 768 }}>
        <div className="row">

          <div className="col text-center">
            <i className="bi bi-coin" id='siteIcon'></i>
            <h1 className='text-center fs-1 text-light' id='siteTitle'>Compound Interest Calculator</h1>
          </div>

        </div>

        <div className="card p-2 bg-secondary bg-gradient">
          <div className="row">

            <div className="col">
              <label htmlFor="initialInvestment" className="form-label custom-form-label">Initial Investment</label>
              <div className="input-group">
                <div className="input-group-text">$</div>
                <input type="text" className="form-control custom-form-input" id='initialInvestment' value={10000} />
              </div>

              <label htmlFor="annualAddition" className="form-label custom-form-label">Annual Addition</label>
              <div className="input-group">
                <div className="input-group-text">$</div>
                <input type="text" className="form-control custom-form-input" id='annualAddition' value={1200} />
              </div>

              <label htmlFor="yearsToGrow" className="form-label custom-form-label">Years to Grow</label>
                <input type="text" className="form-control custom-form-input" id='yearsToGrow' value={10} />


              <label htmlFor="interestRate" className="form-label custom-form-label">Interest Rate</label>
              <div className="input-group">
                <input type="text" className="form-control custom-form-input" id='interestRate' value={5} />
                <div className="input-group-text">%</div>
              </div>

            </div>

            <div className="col">
              <div className="box">TODO: Add a table here.</div>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
