import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BudgetReturnDiv = styled.div`
  display: flex;
  width: 1000px;
  margin-left: 10px;
`;

const BudgetMessageDiv = styled.div`
  color: white;
  margin-left: 10px;
  align-items: left;
`;

const ValueDiv = styled.div`
  color: red
`;

function InvestmentTile({ investingBudget = 0, percentage = 0, category = '' }) {
  const investingBudgetAmount = investingBudget * (percentage / 100);

  return (
    <div>
      <BudgetReturnDiv>
        <ValueDiv>
          {investingBudgetAmount.toFixed(2)}
        </ValueDiv>
        <BudgetMessageDiv>{`is ${percentage}% of your monthly income for ${category}`}</BudgetMessageDiv>
      </BudgetReturnDiv>
    </div>
  );
}

InvestmentTile.defaultProps = {
  investingBudget: 0,
  percentage: 0,
  category: '',
};

InvestmentTile.propTypes = {
  investingBudget: PropTypes.number,
  percentage: PropTypes.number,
  category: PropTypes.string,
};

export default InvestmentTile;
