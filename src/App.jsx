import './App.css'

function App()
{
  return (
    <>
      <div className='container'>
        <div className="row">

          <div className="col text-center">
            <i className="bi bi-coin" id='siteIcon'></i>
            <h1 className='text-center fs-1 text-light' id='siteTitle'>Compound Interest Calculator</h1>
          </div>

        </div>
        <div className="row d-flex justify-content-center rounded-4 bg-dark p-3" id='calcBox'>
          <div className="col p-0" style={{ maxWidth: 768 }}>
            <label htmlFor="principal" className="form-label custom-form-label">Initial Contribution</label>
            <input type="text" className="form-control" id='principal'/>
            
            <label htmlFor="monthlyContribution" className="form-label custom-form-label">Monthly Contribution</label>
            <input type="text" className="form-control" id='monthlyContribution' />

            <label htmlFor="yearsToGrow" className="form-label custom-form-label">Years to Grow</label>
            <input type="text" className="form-control" id='yearsToGrow' />

            <label htmlFor="rateOfReturn" className="form-label custom-form-label">Estimated Rate of Return</label>
            <input type="text" className="form-control" id='rateOfReturn' />

            <label htmlFor="compoundingFreq" className="form-label custom-form-label">Compounding Frequency</label>
            {/* <input type="text" className="form-control" id='compoundingFreq' /> */}
            <select name="" id="" className="form-select">
              <option value="monthly">Monthly</option>
              <option value="annually">Annually</option>
            </select>
          </div>
          <div className="col  p-0">
            <div className="box"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
