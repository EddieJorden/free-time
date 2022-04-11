import React from 'react';
import { useSelector } from 'react-redux';
import InvestmentTile from './InvestmentTile';
import { selectUserHourlyWage, selectUserHoursWorking } from '../userInputForm/userInputSlice';

function InvestmentPortfolio() {
  const hourlyWage = useSelector(selectUserHourlyWage);
  const hoursWorking = useSelector(selectUserHoursWorking);
  // const livingCosts = useSelector(selectUserLivingCosts);
  const monthlyIncome = (hourlyWage * hoursWorking) * 4;
  const investingBudget = (monthlyIncome * 0.3);

  return (
    <div>
      <div>portfolio strategy</div>
      <div />
      <InvestmentTile investingBudget={monthlyIncome} percentage={30} category="investing" />
      <InvestmentTile investingBudget={investingBudget} percentage={60} category="safe stable long term investments" />
      <InvestmentTile investingBudget={investingBudget} percentage={35} category="volotile market, business, short term investing" />
      <InvestmentTile investingBudget={investingBudget} percentage={5} category="risky highly volotile aka gambling" />
      <div />
    </div>
  );
}

export default InvestmentPortfolio;
