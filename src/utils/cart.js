const addItemToCart = (currentItems = [], newItem) => {
  const existingItem = currentItems.find((item) => item?.id === newItem?.id);

  if (existingItem) {
    return currentItems.map((item) => {
      if (item?.id === newItem?.id) {
        return {
          ...item,
          quantity: item.quantity + 1
        };
      }

      return item;
    });
  }

  return [...currentItems, { ...newItem, quantity: 1 }];
};

const clearItemFromCart = (currentItems = [], itemToClear) => 
  currentItems.filter((item) => item.id !== itemToClear.id);

const removeItemFromCart = (currentItems = [], itemToRemove) => {
  if (itemToRemove?.quantity > 1) {
    return currentItems.map((item) => {
      if (item?.id === itemToRemove.id) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item;
    })
  }

  return clearItemFromCart(currentItems, itemToRemove);
}

export default {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart
};
