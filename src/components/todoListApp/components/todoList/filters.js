const filterItems = (listItems, str) => {
  if (!Array.isArray(listItems)) return [];

  return listItems.filter(item => {
    if (typeof str !== 'string') return false;

    return new RegExp(`^${str}`).test(item);
  });
};

export { filterItems };
