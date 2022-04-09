import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 42 };

const userInputSlice = createSlice({
  name: 'userInput',
  initialState,
  reducers: {
    updateUserInput: (state, action) => {
      console.log('updateUserInput reducer fired', state, action);
    },
  },
});

export const { updateUserInput } = userInputSlice.actions;
export default userInputSlice.reducer;
