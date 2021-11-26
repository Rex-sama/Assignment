import * as type from "../action/type";
import { dummy } from "../Components/dummy";

const initial = {
  data: dummy,
};

export default function food(state = initial, action) {
  switch (action.type) {
    case type.GET_PRODUCT:
      return {
        ...state,
        data: [...state.data, ...action.payload],
      };
    case type.ADD_PRODUCT:
      return { ...state, data: [...state.data, action.payload] };
    default:
      return state;
  }
}
