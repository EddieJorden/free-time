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
      <div style={{
        fontSize: '42px', color: 'lightYellow', margin: '15px', fontWeight: 'bold',
      }}
      >
        Portfolio Strategy
      </div>
      <div style={{ margin: '5px' }}>
        <div>your investing budget with 30% for investing</div>
      </div>
      <div />

      <InvestmentTile investingBudget={investingBudget} percentage={60} category="safe stable long term investments" />
      <InvestmentTile investingBudget={investingBudget} percentage={35} category="business, short term investments" />
      <InvestmentTile investingBudget={investingBudget} percentage={5} category="risky highly volotile aka gambling" />
      <div />
    </div>
  );
}

export default InvestmentPortfolio;
