const entryReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_INVENTORY':
        return action.payload;
      case 'UNSET_INVENTORY':
        return [];
      default:
        return state;
    }
  };

export default entryReducer;
  