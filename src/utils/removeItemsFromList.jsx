const removeItemsFromList = (
  index,
  arrayObjects,
  setMessage,
  changeIndex = false
) => {
  let newTodos = [...arrayObjects];
  newTodos.splice(index, 1);
  if (changeIndex === true) {
    newTodos = newTodos.map((item, index) => ({
      ...item,
      id: index,
    }));
  }
  setMessage(newTodos);
};

export default removeItemsFromList;
