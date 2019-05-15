export const SET_VEHICLES='SET_VEHICLES'
export const SET_COUNT='SET_COUNT'
const initialState = {
  data: {},
  count: 0
}
const vehicles = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_VEHICLES:
      return { ...state, vehicles: actions.data };
    case SET_COUNT:
      return { ...state, count: actions.data };
    default:
      return state;
  }
};

export default vehicles
