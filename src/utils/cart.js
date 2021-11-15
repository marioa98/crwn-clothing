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

export default {
  addItemToCart
};
