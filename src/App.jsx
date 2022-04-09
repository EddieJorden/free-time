import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserInputForm from './components/userInputForm/UserInputForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        hello world
        <UserInputForm />
      </header>
    </div>
  );
}

export default App;
