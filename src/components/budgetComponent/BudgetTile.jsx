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
`;

const ValueDiv = styled.div`
  color: red
`;

function BudgetTile({ monthlyIncome = 0, percentage = 0, category = '' }) {
  const budgetAmount = monthlyIncome * (percentage / 100);

  return (
    <div>
      <BudgetReturnDiv>
        <ValueDiv>
          {budgetAmount}
        </ValueDiv>
        <BudgetMessageDiv>{`is ${percentage}% of your monthly income for ${category}`}</BudgetMessageDiv>
      </BudgetReturnDiv>
    </div>
  );
}

BudgetTile.defaultProps = {
  monthlyIncome: 0,
  percentage: 0,
  category: '',
};

BudgetTile.propTypes = {
  monthlyIncome: PropTypes.number,
  percentage: PropTypes.number,
  category: PropTypes.string,
};

export default BudgetTile;
