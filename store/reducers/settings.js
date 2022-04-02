import { DRAWERTOGGLE } from "../../contants/types";

const initialState = {
  drawer: false,
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRAWERTOGGLE:
      return {
        ...state,
        drawer: !state.drawer,
      };


    default:
      return state;
  }
};

export default settingsReducer;