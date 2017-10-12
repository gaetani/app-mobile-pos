
const initialState = {
  scene: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // focus action is dispatched when a new screen comes into focus
    case 'DO_LOGIN':
      return {...state,list:action.payload};
    // ...other actions

    default:
      return state;
  }
}