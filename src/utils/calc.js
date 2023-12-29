function futureValue({
    principal,
    annualInvestment,
    rate,
    numPeriods
}) {
    let newValue = principal
    
    for (let i = 0; i < numPeriods; i++)
    {
        // Note: Contributions are made at the end of the compounding period.
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
    const {principal, annualInvestment, rate, numPeriods } = params

    let tableData = []
    let previousTI = 0

    for (let i = 1; i <= numPeriods; i++)
    {
        let data = {
            ...params,
            ['numPeriods']: i
        }
        let fv = futureValue(data)
        let ti = fv - principal - annualInvestment // We subtract the annualInvestment here b/c it is added at the end of the compounding period, so it shouldn't be counted as interest.
        let ip = principal + (annualInvestment * i)
        let pi = ti - previousTI
        previousTI = fv - principal

        tableData.push({
            year: i,
            futureValue: fv,
            periodInterest: pi,
            totalInterest: ti,
            investedPrincipal: ip
        })
    }
    return tableData
}

function toCurrency(number)
{
    number = Math.round(number)

    const options = {
        style: 'currency',
        currency: 'USD',
    }
    const formatter = new Intl.NumberFormat('en-US', options)

    number = formatter.format(number)
    number = number.slice(0, number.indexOf("."))

    return number
}

export {
    futureValue,
    calculateTableData,
    toCurrency
}