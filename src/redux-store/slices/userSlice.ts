import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SINGLE_USER, USER_LIST } from "./utils/prefix";

import { fetchUserListAction } from "../actions/handlers/anotherHandlers/userActions";
import { loadingActionHandler } from "../actions/helpers/loadingActionHandler";
import { errorActionHandler } from "../actions/helpers/errorActionHandler";
import { successActionHandler } from "../actions/helpers/successActionHandler";
import { checkHandler } from "../actions/helpers/check";

export type User = { name: string; username: string; phone: string };

export interface UserType {
  userListLoading: boolean;
  userListError: object | null;
  userListData: User[] | null;

  singleUserLoading: boolean;
  singleUserError: object | null;
  singleUserData: User | null;
}

const initialState: UserType = {
  userListLoading: false,
  userListError: null,
  userListData: null,

  singleUserLoading: false,
  singleUserError: null,
  singleUserData: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    singleUserLoadingAction: (state, action) => {
      const { payload } = action;
      state.singleUserLoading = true;
    },

    singleUserErrorAction: (state, action: PayloadAction<object | null>) => {
      const { payload } = action;
      state.singleUserError = payload;
      state.singleUserData = null;
      state.singleUserLoading = false;
    },

    singleUserSuccessAction: (state, action: PayloadAction<User | null>) => {
      const { payload } = action;
      state.singleUserError = null;
      state.singleUserData = payload;
      state.singleUserLoading = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUserListAction.pending, (state, action) => {
      console.log("loading :", action);
      state.userListLoading = true;
    });

    builder.addCase(fetchUserListAction.rejected, (state, action) => {
      const { error } = action;
      console.log("error :", action);

      state.userListError = error;
      state.userListData = null;
      state.userListLoading = false;
    });

    builder.addCase(fetchUserListAction.fulfilled, (state, action) => {
      const { payload } = action;
      console.log("success :", action);

      const modifiedUser = payload.map(
        (item: { name: string; username: string; phone: string }) => ({
          name: item.name,
          username: item.username,
          phone: item.phone,
        })
      );

      checkHandler(state);

      state.userListError = null;
      state.userListData = modifiedUser;
      state.userListLoading = false;
    });
  },
});

export const {
  singleUserLoadingAction,
  singleUserErrorAction,
  singleUserSuccessAction,
} = userSlice.actions;

export default userSlice;
