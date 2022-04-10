import React, { useState } from 'react';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
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

  return (
    <div style={{
      backgroundColor: 'lightBlue', padding: '42px', borderRadius: '15px', display: 'flex', justifyContent: 'space-between', width: '61vw', margin: '42px',
    }}
    >
      <input placeholder="hourlyWage" defaultValue={hourlyWage} onChange={debounce(updateHourlyWage, 1000)} />
      <input placeholder="hoursWorking" defaultValue={hoursWorking} onChange={debounce(updateHoursWorking, 1000)} />
      <input placeholder="livingCosts" defaultValue={livingCosts} onChange={debounce(updateLivingCosts, 1000)} />
    </div>
  );
}

export default UserInputForm;
