export default function Table()
{
    return (
        <div className="card p-2 mb-3 bg-secondary custom-shadow">

            <label htmlFor="futureValue" className="form-label custom-form-label">Future Value</label>
            <div className="input-group">
                <div className="input-group-text">$</div>
                <input type="text" className="form-control custom-form-input" id='futureValue' value={31382} readOnly />
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
    )
}