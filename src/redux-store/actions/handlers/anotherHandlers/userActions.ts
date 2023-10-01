import { createAsyncThunk } from '@reduxjs/toolkit';
import { thunkActionHandler } from '../../helpers/thunkActionHandler';

export const fetchUserListAction = createAsyncThunk(
  'user/fetchUserList',
  thunkActionHandler,
);
