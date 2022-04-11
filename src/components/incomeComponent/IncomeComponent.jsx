import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectUserHourlyWage, selectUserHoursWorking, selectUserLivingCosts } from '../userInputForm/userInputSlice';

const ValueDiv = styled.div`
  color: red
`;

function IncomeComponent() {
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
    </div>
  );
}

export default IncomeComponent;
