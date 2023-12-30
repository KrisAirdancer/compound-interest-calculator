import { futureValue, calculateTableData, formatAsCurrency, tableDataToIntegers } from './utils/calc'
import { v4 as uuidv4 } from 'uuid'

export default function Table({ tableData })
{
    return (
        <div className="card p-2 mb-3 bg-secondary custom-shadow container-fluid" id='table'>

            <div className='border rounded-2 p-1 custom-shadow-2'>
                <h1 className='text-center fs-5 custom-bold' id='future-value-header'>Future Value</h1>
                <h2 className='fs-5 mb-0 text-center future-value'>${formatAsCurrency(futureValue(tableDataToIntegers(tableData)))}</h2>
            </div>

            <div className="row mt-2">
                <div className="col">
                    <table className="table custom-table text-center" id='bootstrap-override'>
                        <thead>
                            <tr key={uuidv4()}>
                                <th>Year</th>
                                <th>Future Value</th>
                                <th>Interest (Year)</th>
                                <th>Total Interest</th>
                                <th>Principal Invested</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                calculateTableData(tableData).map(line => {
                                    return (
                                        <tr key={uuidv4()}>
                                            <td>{line.year}</td>
                                            <td>${formatAsCurrency(line.futureValue)}</td>
                                            <td>${formatAsCurrency(line.periodInterest)}</td>
                                            <td>${formatAsCurrency(line.totalInterest)}</td>
                                            <td>${formatAsCurrency(line.investedPrincipal)}</td>
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