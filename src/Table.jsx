import { futureValue, calculateTableData, toCurrency } from './utils/calc'

export default function Table({ userInput })
{
    const tableData = calculateTableData(userInput)

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
                            {
                                tableData.map(line => {
                                    return (
                                        <tr>
                                            <td>{line.year}</td>
                                            <td>{toCurrency(line.futureValue)}</td>
                                            <td>{toCurrency(line.periodInterest)}</td>
                                            <td>{toCurrency(line.totalInterest)}</td>
                                            <td>{toCurrency(line.investedPrincipal)}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}