const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
 
  switch (type) {
    case 'ADD_TO_CART':
      return { ...state, products: [...state.products, payload] };
    default:
      return state;
  }
};
