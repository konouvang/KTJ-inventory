const updateReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_INVENTORY':
      return action.payload;
    default:
      return state;
  }
};


export default updateReducer;