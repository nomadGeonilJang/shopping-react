import { useSelector } from "react-redux";
import { RootState } from "utils/redux/root-reducer";

export const useShop = () => {
  return useSelector( ( state:RootState ) => state.shop );
};