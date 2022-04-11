import React from 'react';
import './App.css';
import UserInputForm from './components/userInputForm/UserInputForm';
import BudgetComponent from './components/budgetComponent/BudgetComponent';
import InvestmentPortfolio from './components/investmentPortfolio/InvestmentPortfolio';
import IncomeComponent from './components/incomeComponent/IncomeComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserInputForm />
        <IncomeComponent />
        <BudgetComponent />
        <InvestmentPortfolio />
      </header>
    </div>
  );
}

export default App;
