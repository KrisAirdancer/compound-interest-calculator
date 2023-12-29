import { formatAsCurrency } from "./utils/calc"

export default function UserInput({ handleChange, handleSubmit, userInput })
{
    return (
        <div className="card p-2 mb-3 bg-secondary custom-shadow">

            <div className="row">

                <div className="col" id="bootstrap-override">

                    <form onSubmit={(event) => { handleSubmit(event) }}>

                        <label htmlFor="principal" className="form-label custom-form-label">Initial Investment</label>
                        <div className="input-group">
                            <div className="input-group-text">$</div>
                            <input
                                type="text"
                                className="form-control custom-form-input"
                                id='principal'
                                onChange={(event) => { handleChange('principal', event.target.value) }}
                                // value={formatAsCurrency(userInput.principal)}
                                value={userInput.principal}
                                required
                            />
                        </div>

                        <label htmlFor="annualInvestment" className="form-label custom-form-label">Annual Investment</label>
                        <div className="input-group">
                            <div className="input-group-text">$</div>
                            <input
                                type="text"
                                className="form-control custom-form-input"
                                id='annualInvestment'
                                onChange={(event) => { handleChange('annualInvestment', event.target.value) }}
                                value={userInput.annualInvestment}
                                required
                            />
                        </div>

                        <label htmlFor="numPeriods" className="form-label custom-form-label">Years to Grow</label>
                        <input
                            type="text"
                            className="form-control custom-form-input"
                            id='numPeriods'
                            onChange={(event) => { handleChange('numPeriods', event.target.value) }}
                            value={userInput.numPeriods}
                            required
                        />

                        <label htmlFor="rate" className="form-label custom-form-label">Interest Rate</label>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control custom-form-input"
                                id='rate'
                                onChange={(event) => { handleChange('rate', event.target.value) }}
                                value={userInput.rate}
                                step={0.01}
                                required
                            />
                            <div className="input-group-text">%</div>
                        </div>

                        <button type="submit" className="btn btn-light mt-2">Calculate</button>

                    </form>

                </div>
            </div>
        </div>
    )
}