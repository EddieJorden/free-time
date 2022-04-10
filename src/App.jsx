import React from 'react';
import './App.css';
import UserInputForm from './components/userInputForm/UserInputForm';
import BudgetComponent from './components/budgetComponent/BudgetComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        hello world
        <UserInputForm />
        <BudgetComponent />
      </header>
    </div>
  );
}

export default App;
