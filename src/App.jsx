import { useState } from "react";
import Header from "./components/Header/Header";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import UserInput from "./components/UserInput/UserInput";

function App() {
 
  const [userInput, setUserInput] = useState (null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
   
  };

   const yearlyData = []; // per-year results

   if(userInput)
   {
 let currentSavings = +userInput["current-savings"]; //  the shape of this input object
    const yearlyContribution = +userInput["yearly-contribution"]; 
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    //  calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
    }
   }
   

  return (
    <div>
    <Header/>

     <UserInput onCalculate = {calculateHandler}/>
   
   {!userInput && <p style={{textAlign: 'center'}}>No investment calculated yet.</p>}
   {userInput && <ResultsTable data={yearlyData} 
    initialInvestment = {userInput['current-savings']}
   /> }
      
    </div>
  );
}

export default App;
