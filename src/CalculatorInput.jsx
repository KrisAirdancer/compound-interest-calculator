export default function CalculatorInput()
{
    return (
        <div className="card p-2 mb-3 bg-secondary custom-shadow">

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

                </div>
            </div>
        </div>
    )
}