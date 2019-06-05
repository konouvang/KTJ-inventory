const inventoryReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_INVENTORY':
        return action.payload;
      case 'UNSET_INVENTORY':
        return [];
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.inventory
  export default inventoryReducer;
  