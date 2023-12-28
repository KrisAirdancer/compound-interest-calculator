import { useState } from "react"

export default function CalculatorInput()
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
        <div className="card p-2 mb-3 bg-secondary custom-shadow">

            <div className="row">

                <div className="col">

                    <label htmlFor="principal" className="form-label custom-form-label">Initial Investment</label>
                    <div className="input-group">
                        <div className="input-group-text">$</div>
                        <input
                            type="number"
                            className="form-control custom-form-input"
                            id='principal'
                            onChange={(event) => { handleChange('principal', event.target.value) }}
                            value={userInput.principal}
                            required
                        />
                    </div>

                    <label htmlFor="annualInvestment" className="form-label custom-form-label">Annual Addition</label>
                    <div className="input-group">
                        <div className="input-group-text">$</div>
                        <input
                            type="number"
                            className="form-control custom-form-input"
                            id='annualInvestment'
                            onChange={(event) => { handleChange('annualInvestment', event.target.value) }}
                            value={userInput.annualInvestment}
                            required
                        />
                    </div>

                    <label htmlFor="numPeriods" className="form-label custom-form-label">Years to Grow</label>
                    <input
                        type="number"
                        className="form-control custom-form-input"
                        id='numPeriods'
                        onChange={(event) => { handleChange('numPeriods', event.target.value) }}
                        value={userInput.numPeriods}
                        required
                    />

                    <label htmlFor="rate" className="form-label custom-form-label">Interest Rate</label>
                    <div className="input-group">
                        <input
                            type="number"
                            className="form-control custom-form-input"
                            id='rate'
                            onChange={(event) => { handleChange('rate', event.target.value) }}
                            value={userInput.rate}
                            required
                        />
                        <div className="input-group-text">%</div>
                    </div>

                </div>
            </div>
        </div>
    )
}