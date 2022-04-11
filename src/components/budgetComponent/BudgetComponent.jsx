import React from 'react';
import { useSelector } from 'react-redux';

import { selectUserHourlyWage, selectUserHoursWorking } from '../userInputForm/userInputSlice';
import BudgetTile from './BudgetTile';

function BudgetComponent() {
  const hourlyWage = useSelector(selectUserHourlyWage);
  const hoursWorking = useSelector(selectUserHoursWorking);
  const monthlyIncome = (hourlyWage * hoursWorking) * 4;

  return (
    <div>

      <div title="this is the amount you can safely live off of" style={{ margin: '42px' }}>
        <div />
        <BudgetTile monthlyIncome={monthlyIncome} percentage={60} category="living expenses" />
        <BudgetTile monthlyIncome={monthlyIncome} percentage={30} category="investing" />
        <BudgetTile monthlyIncome={monthlyIncome} percentage={10} category="savings" />
      </div>

    </div>
  );
}

export default BudgetComponent;
