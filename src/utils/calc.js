function futureValue({
    principal,
    annualInvestment,
    rate,
    numPeriods
}) {
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

export default futureValue