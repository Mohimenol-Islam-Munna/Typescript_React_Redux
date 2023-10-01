import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  groupListLoading: false,
  groupListError: null,
  groupListData: null,
};

const groupSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = groupSlice.actions;
export default groupSlice;
