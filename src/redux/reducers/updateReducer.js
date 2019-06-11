const updateReducer = (state = {}, action) => {
    switch (action.type) {
      case 'UPDATE_INVENTORY':
        return action.payload;
      case 'UNSET_INVENTORY':
        return [];
      default:
        return state;
    }
  };

export default updateReducer;
  