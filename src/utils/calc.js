function futureValue({
    principal,
    annualInvestment,
    rate,
    numPeriods
}) {
    // console.log("AT: futureValue()")
    // console.log({principal: principal, annualInvestment: annualInvestment, rate: rate, numPeriods: numPeriods})
    let newValue = principal
    
    for (let i = 0; i < numPeriods; i++)
    {
        newValue = basicFutureValue(newValue, rate, 1, 1) + annualInvestment
    }

    return Math.round(newValue)
}

// p - principal
// r - rate
// n - number of times interest is applied per time period (Ex. n = 12 for monthly compounding)
// t - number of compounding periods
function basicFutureValue(p, r, n, t)
{
    return p * ((1 + ((r / 100) / n)) ** (n * t))
}

function calculateTableData(params)
{
    // TODO: Implement logic to correctly calculate the return values.
    // console.log('AT: calculateTableData()')
    // console.log({principal: principal, annualInvestment: annualInvestment, rate: rate, numPeriods: numPeriods})

    const {principal, annualInvestment, rate, numPeriods } = params

    let tableData = []

    for (let i = 1; i <= numPeriods; i++)
    {
        tableData.push({
            year: i,
            futureValue: futureValue({
                ...params,
                [numPeriods]: i
            }),
            // futureValue: -1,
            periodInterest: -1,
            totalInterest: -1,
            investedPrincipal: -1
        })
    }
    return tableData
}

export {
    futureValue,
    calculateTableData
}