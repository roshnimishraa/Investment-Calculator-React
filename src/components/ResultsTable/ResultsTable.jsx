import classes from "./ResultsTable.module.css"

//format of numbers as currency
/*
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
})
*/

const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});



const ResultsTable = (props) => {
  return (
    <div>
         <table className={classes.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
            {props.data.map((yearData) => (
                 <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.savingsEndOfYear)}</td>
            <td>{formatter.format(yearData.yearlyInterest)}</td>
            <td>{formatter.format(yearData.savingsEndOfYear - 
            props.initialInvestment - 
            yearData.yearlyContribution * yearData.year)}
            </td>
            <td>{formatter.format(props.initialInvestment +
            yearData.yearlyContribution * yearData.year)}</td>
          </tr>
            ) )}
         
        </tbody>
      </table> 
    </div>
  )
}

export default ResultsTable
