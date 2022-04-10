import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserHourlyWage, selectUserHoursWorking, selectUserLivingCosts } from '../userInputForm/userInputSlice';

function BudgetComponent() {
  const [updateState, setUpdateState] = useState(1);
  const hourlyWage = useSelector(selectUserHourlyWage);
  const hoursWorking = useSelector(selectUserHoursWorking);
  const monthlyIncome = (hourlyWage * hoursWorking) * 4;
  const livingCosts = useSelector(selectUserLivingCosts);
  console.log('hourlywage selector in budget component', hourlyWage);

  const handleClick = () => {
    const acc = updateState + 1;
    setUpdateState(acc);
  };

  return (
    <div>
      <div>Monthly Income</div>
      <div style={{ color: 'red' }}>
        {monthlyIncome}
      </div>
      <div>Living Costs</div>
      <div style={{ color: 'red' }}>{livingCosts}</div>
      <div style={{ margin: '42px' }}>
        50% lving costs/needs is
      </div>
      <div>30% wants</div>
      <div>20% savints</div>

      <div>portfolio strategy</div>
      <div>60% safe stable long term investing</div>
      <div>35% volotile investment business</div>
      <div>5% risky investment gamling</div>
      <div />
      <div>{updateState}</div>
      <button type="submit" onClick={handleClick}>
        update state
      </button>
    </div>
  );
}

export default BudgetComponent;
