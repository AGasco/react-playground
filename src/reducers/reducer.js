import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'global',
  initialState: [],
  reducers: {
    fetchedAll(state, action) {
      state.value = action.payload;
    }
  }
});

export const { fetchedAll } = slice.actions;
export default slice.reducer;
