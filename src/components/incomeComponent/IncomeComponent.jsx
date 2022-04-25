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

  // const monthlyIncome = (hourlyWage * hoursWorking) * 4;
  const monthlyIncome = () => {
    let overtimeHours = 0;
    let regularHours = 0;
    let totalMonthlyIncome = 0;
    if (hoursWorking > 40) {
      overtimeHours = hoursWorking - 40;
      regularHours = hoursWorking - overtimeHours;
      totalMonthlyIncome = ((regularHours * hourlyWage) + (overtimeHours * (hourlyWage * 1.5))) * 4;
      console.log('totalMonthlyIncome', totalMonthlyIncome);
      console.log('regularHours', regularHours);
      console.log('overtimeHours', overtimeHours);
    }
    if (hoursWorking <= 40) {
      regularHours = hoursWorking;
      totalMonthlyIncome = (regularHours * hourlyWage) * 4;
      console.log('regularHours', regularHours);
    }

    return totalMonthlyIncome;
  };

  const livingCosts = useSelector(selectUserLivingCosts);
  const overUnder = monthlyIncome() - livingCosts;
  const totalHoursInWeek = 24 * 7;
  const freeTime = totalHoursInWeek - hoursWorking;

  const taxCalculator = () => {
    const yearlyIncome = monthlyIncome() * 12;
    if (yearlyIncome <= 9950) {
      return monthlyIncome() * 0.10;
    }
    if ((yearlyIncome >= 9951) && (yearlyIncome <= 40525)) {
      return monthlyIncome() * 0.12;
    }
    if ((yearlyIncome >= 40526) && (yearlyIncome <= 86375)) {
      return monthlyIncome() * 0.22;
    }
    if ((yearlyIncome >= 86376) && (yearlyIncome <= 164925)) {
      return monthlyIncome() * 0.24;
    }
    if ((yearlyIncome >= 164926) && (yearlyIncome <= 209425)) {
      return monthlyIncome() * 0.32;
    }
    if ((yearlyIncome >= 209426) && yearlyIncome <= 523600) {
      return monthlyIncome() * 0.35;
    }
    if ((yearlyIncome >= 523601)) {
      return monthlyIncome() * 0.37;
    }
    return 'error';
  };

  const monthlyIncomeAfterTaxes = () => {
    if (taxCalculator().isNaN) {
      return taxCalculator();
    } return monthlyIncome() - taxCalculator();
  };

  const timeTillRich = () => {
    let months = 0;
    let totalInvestingPower = 0;
    if (monthlyIncomeAfterTaxes() !== 0) {
      while (totalInvestingPower < 2000000) {
        totalInvestingPower += monthlyIncomeAfterTaxes() * 0.40;
        months += 1;
      }
    }
    return months;
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <IncomeItemDiv>
          <div>Monthly Income</div>
          {monthlyIncome() > 0 ? <PositiveValueDiv>{monthlyIncome()}</PositiveValueDiv> : (
            <NegativeValueDiv>
              {monthlyIncome()}
            </NegativeValueDiv>
          )}
          <div>After Income Tax</div>
          <PositiveValueDiv>
            {monthlyIncomeAfterTaxes()
              ? (
                <PositiveValueDiv>
                  {monthlyIncomeAfterTaxes()}
                </PositiveValueDiv>
              )
              : <NegativeValueDiv>{monthlyIncomeAfterTaxes()}</NegativeValueDiv>}
          </PositiveValueDiv>
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
            ? <PositiveValueDiv>{`${freeTime} hours per week`}</PositiveValueDiv>
            : <NegativeValueDiv>{`${freeTime} hours per week`}</NegativeValueDiv>}
        </IncomeItemDiv>
        <IncomeItemDiv>
          <div>Months Until $2 million</div>
          {`${timeTillRich()} months`}
        </IncomeItemDiv>
      </div>
    </div>
  );
}

export default IncomeComponent;
