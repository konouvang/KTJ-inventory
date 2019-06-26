const currentImageReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_CURRENT_IMAGE':
        return action.payload;
      case 'CLEAR_CURRENT_IMAGE':
        return '';
      default:
        return state;
    }
  };

export default currentImageReducer;
  