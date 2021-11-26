import * as type from "./type";
import axios from "axios";

export const getProduct = () => async (dispatch) => {
  try {
    const result = await axios.get("http://localhost:5000");
    dispatch({ type: type.GET_PRODUCT, payload: result.data });
  } catch (error) {
    return error.response;
  }
};

export const addProduct = (data) => async (dispatch) => {
  try {
    const result = await axios.post("http://localhost:5000/addProduct", data);
    dispatch({ type: type.ADD_PRODUCT, payload: result.data });
    return result;
  } catch (error) {
    return error.response;
  }
};
