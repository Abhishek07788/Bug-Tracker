import {
  loading,
  failed,
  dataLoading,
  bugs_add,
  bugs_get,
  bugs_delete,
  bugs_update,
} from "./bugs.type";
import axios from "axios";

// ------------ (Add new bugs) ----------------
export const addBug = (form) => async (dispatch) => {
  dispatch({ type: loading });
  try {
    const res = await axios.post("https://paypal-3knu.onrender.com/bugs", form);
    dispatch({ type: bugs_add });
  } catch (e) {
    dispatch({ type: failed });
  }
};

// ------------ (get bugs) ----------------
export const getBugs = () => async (dispatch) => {
  dispatch({ type: dataLoading });
  try {
    const res = await axios.get("https://paypal-3knu.onrender.com/bugs");
    dispatch({ type: bugs_get, payload: res.data });
  } catch (e) {
    dispatch({ type: failed });
  }
};

// ------------ (delete bugs) ----------------
export const deleteBug = (id) => async (dispatch) => {
  dispatch({ type: loading });
  try {
    await axios.delete(`https://paypal-3knu.onrender.com/bugs/${id}`);
    dispatch({ type: bugs_delete });
  } catch (e) {
    dispatch({ type: failed });
  }
};

// ------------ (update bugs) ----------------
export const updateBug = (id, cred) => async (dispatch) => {
  dispatch({ type: loading });
  try {
    await axios.patch(`https://paypal-3knu.onrender.com/bugs/update/${id}`, cred);
    dispatch({ type: bugs_update });
  } catch (e) {
    dispatch({ type: failed });
  }
};
