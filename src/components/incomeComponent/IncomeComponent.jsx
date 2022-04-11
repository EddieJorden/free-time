import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectUserHourlyWage, selectUserHoursWorking, selectUserLivingCosts } from '../userInputForm/userInputSlice';

const IncomeItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;

const NegativeValueDiv = styled.div`
  color: red
`;

const PositiveValueDiv = styled.div`
  color: green
`;

function IncomeComponent() {
  const hourlyWage = useSelector(selectUserHourlyWage);
  const hoursWorking = useSelector(selectUserHoursWorking);
  const monthlyIncome = (hourlyWage * hoursWorking) * 4;
  const livingCosts = useSelector(selectUserLivingCosts);
  const overUnder = monthlyIncome - livingCosts;
  const totalHoursInWeek = 24 * 7;
  const freeTime = totalHoursInWeek - hoursWorking;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <IncomeItemDiv>
          <div>Monthly Income</div>
          {monthlyIncome > 0 ? <PositiveValueDiv>{monthlyIncome}</PositiveValueDiv> : (
            <NegativeValueDiv>
              {monthlyIncome}
            </NegativeValueDiv>
          )}
        </IncomeItemDiv>
        <IncomeItemDiv>
          <div>Living Costs</div>
          <NegativeValueDiv>{livingCosts}</NegativeValueDiv>
        </IncomeItemDiv>
        <IncomeItemDiv>
          <div>Over Under</div>
          {overUnder > 0
            ? <PositiveValueDiv>{overUnder}</PositiveValueDiv>
            : <NegativeValueDiv>{overUnder}</NegativeValueDiv>}
        </IncomeItemDiv>
        <IncomeItemDiv>
          <div>Free Time</div>
          {freeTime > 95
            ? <PositiveValueDiv>{freeTime}</PositiveValueDiv>
            : <NegativeValueDiv>{freeTime}</NegativeValueDiv>}
        </IncomeItemDiv>
      </div>
    </div>
  );
}

export default IncomeComponent;
