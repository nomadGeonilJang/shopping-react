import {  useSelector } from "react-redux";
import { RootState } from "utils/redux/root-reducer";

export const useDirectory = () => {
  return useSelector( ( state:RootState ) => state.directory );
};