import { createSlice } from '@reduxjs/toolkit';

export const stateSlice = createSlice({
  name: 'clickState',
  initialState: {
    value: false,
    isClicked: null as '게시판' | '서비스 02' | '서비스 03' | null,
  },
  reducers: {
    makeTrue: state => {
      state.value = true;
    },
    makeFalse: state => {
      state.value = false;
    },
    setClickedItem: (state, action) => {
      state.isClicked = action.payload;
    },
  },
});

export const { makeTrue, makeFalse, setClickedItem } = stateSlice.actions;
export default stateSlice.reducer;
