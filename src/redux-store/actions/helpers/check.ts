import { current } from "@reduxjs/toolkit";
import { UserType } from "../../slices/userSlice";

export const checkHandler = <T extends UserType>(state: T): string => {
  console.log("checkHandler state :", state);
  return "checkhandler";
};
