import { futureValue, calculateTableData, toCurrency } from './utils/calc'

export default function Table({ userInput })
{
    const tableData = calculateTableData(userInput)

    return (
        <div className="card p-2 mb-3 bg-secondary custom-shadow container-fluid" id='table'>

            <div className='border rounded-2 p-1 custom-shadow-2'>
                <h1 className='text-center fs-5 custom-bold' id='siteTitle'>Future Value</h1>
                <h2 className='fs-5 mb-0 text-center future-value'>{toCurrency(futureValue(userInput))}</h2>
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