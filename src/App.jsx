import React from 'react';
import './App.css';
import UserInputForm from './components/userInputForm/UserInputForm';
import BudgetComponent from './components/budgetComponent/BudgetComponent';
import InvestmentPortfolio from './components/investmentPortfolio/InvestmentPortfolio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        hello world
        <UserInputForm />
        <BudgetComponent />
        <InvestmentPortfolio />
      </header>
    </div>
  );
}

export default App;
