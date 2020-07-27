const initialState = {
  dark: true,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      state.dark = !state.dark;
      break;
  }
  // return state;
  return {...state};
};
