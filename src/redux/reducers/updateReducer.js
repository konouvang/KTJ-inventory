// const updateReducer = (state = {}, action) => {
//     switch (action.type) {
//       case 'UPDATE_INVENTORY':
//           return [...state, { inventoryId: action.payload.id,
//                               batch: action.payload.batch,
//                               name: action.payload.name,
//                               product_line: action.payload.product_line,
//                               length: action.payload.length,
//                               texture: action.payload.texture,
//                               color: action.payload.color,
//                               hair_type: action.payload.hair_type,
//                               region_type: action.payload.region_type,
//                               factory: action.payload.factory,
//                               current_location: action.payload.current_location,
//                               quantity: action.payload.quantity,
//                               cost_of_batch: action.payload.cost_of_batch,
//                               price_per_unit: action.payload.price_per_unit,
//                               photos: action.payload.photos,
//                               qr_code: action.payload.qr_code
//                             }];
//       case 'UNSET_INVENTORY':
//         return [];
//       default:
//         return state;
//     }
//   };

const updateReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_INVENTORY':
      return action.payload;
    default:
      return state;
  }
};


export default updateReducer;