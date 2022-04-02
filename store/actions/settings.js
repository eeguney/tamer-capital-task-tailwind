import { DRAWERTOGGLE } from "../../contants/types";

export const drawerToggle = () => async (dispatch) => {
  dispatch({
    type: DRAWERTOGGLE,
  });
};
