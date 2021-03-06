/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const userInputSlice = createSlice({
  name: 'userInput',
  initialState: {
    hourlyWage: 0,
    hoursWorking: 0,
    livingCosts: 0,
  },

  reducers: {
    updateUserHourlyWage: (state, action) => {
      const { hourlyWage } = action.payload;
      state.hourlyWage = hourlyWage;
    },
    updateUserHoursWorking: (state, action) => {
      const { hoursWorking } = action.payload;
      state.hoursWorking = hoursWorking;
    },
    updateUserLivingCosts: (state, action) => {
      const { livingCosts } = action.payload;
      state.livingCosts = livingCosts;
    },
  },
});

export const {
  updateUserHourlyWage,
  updateUserHoursWorking,
  updateUserLivingCosts,
} = userInputSlice.actions;
export default userInputSlice.reducer;

export const selectUserHourlyWage = (state) => state.userInputSlice.hourlyWage;
export const selectUserHoursWorking = (state) => state.userInputSlice.hoursWorking;
export const selectUserLivingCosts = (state) => state.userInputSlice.livingCosts;
