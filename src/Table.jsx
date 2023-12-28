import futureValue from './utils/calc'

export default function Table({ userInput })
{
    console.log(userInput)

    return (
        <div className="card p-2 mb-3 bg-secondary custom-shadow">

            <label htmlFor="futureValue" className="form-label custom-form-label">Future Value</label>
            <div className="input-group">
                <div className="input-group-text">$</div>
                <input
                    type="number"
                    className="form-control custom-form-input"
                    id='futureValue'
                    value={futureValue(userInput)}
                    readOnly
                    />
            </div>

            <div className="row mt-2">
                <div className="col">
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
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}