/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const userInputSlice = createSlice({
  name: 'userInput',
  initialState: {
    hourlyWage: null,
    hoursWorking: null,
    livingCosts: null,
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
