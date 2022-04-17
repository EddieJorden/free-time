import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectUserHourlyWage, selectUserHoursWorking, selectUserLivingCosts } from '../userInputForm/userInputSlice';
import BudgetTile from './BudgetTile';

const ValueDiv = styled.div`
  color: red
`;

function BudgetComponent() {
  const hourlyWage = useSelector(selectUserHourlyWage);
  const hoursWorking = useSelector(selectUserHoursWorking);
  const monthlyIncome = (hourlyWage * hoursWorking) * 4;
  const livingCosts = useSelector(selectUserLivingCosts);
  const overUnder = monthlyIncome - livingCosts;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '1000px' }}>
        <div>Monthly Income</div>
        <ValueDiv>
          {monthlyIncome}
        </ValueDiv>
        <div>Living Costs</div>
        <ValueDiv>{livingCosts}</ValueDiv>
        <div>Over Under</div>
        <ValueDiv>{overUnder}</ValueDiv>
      </div>
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
