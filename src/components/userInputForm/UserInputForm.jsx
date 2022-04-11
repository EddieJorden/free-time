import React, { useState } from 'react';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { updateUserHourlyWage, updateUserHoursWorking, updateUserLivingCosts } from './userInputSlice';

function UserInputForm() {
  const [hourlyWage, setHourlyWage] = useState(null);
  const [hoursWorking, setHoursWorking] = useState(null);
  const [livingCosts, setLivingCosts] = useState(null);

  const dispatch = useDispatch();

  const updateHourlyWage = (e) => {
    setHourlyWage(e.target.value);
    dispatch(updateUserHourlyWage({
      hourlyWage: Number(e.target.value),
    }));
  };

  const updateHoursWorking = (e) => {
    setHoursWorking(e.target.value);
    dispatch(updateUserHoursWorking({
      hoursWorking: Number(e.target.value),
    }));
  };

  const updateLivingCosts = (e) => {
    setLivingCosts(e.target.value);
    dispatch(updateUserLivingCosts({
      livingCosts: Number(e.target.value),
    }));
  };

  const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    color: black
  `;

  return (
    <div>
      <div style={{
        fontSize: '42px', color: 'aquamarine', margin: '15px', fontWeight: 'bold',
      }}
      >
        How much free time to do you have?
      </div>
      <div style={{
        backgroundColor: 'grey', padding: '42px', borderRadius: '15px', display: 'flex', justifyContent: 'space-around', width: '61vw', margin: '42px',
      }}
      >
        <InputContainer>
          Hourly Wage
          <input placeholder="hourly Wage" defaultValue={hourlyWage} onChange={debounce(updateHourlyWage, 1000)} style={{ margin: '5px' }} />
        </InputContainer>
        <InputContainer>
          Hours Per Week
          <input placeholder="hours Per Week" defaultValue={hoursWorking} onChange={debounce(updateHoursWorking, 1000)} style={{ margin: '5px' }} />
        </InputContainer>
        <InputContainer>
          Living Costs
          <input placeholder="Living Costs" defaultValue={livingCosts} onChange={debounce(updateLivingCosts, 1000)} style={{ margin: '5px' }} />
        </InputContainer>
      </div>
    </div>
  );
}

export default UserInputForm;
