const alluserReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_ALLUSERS':
        return action.payload;
      case 'UNSET_ALLUSERS':
        return [];
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default alluserReducer;
  