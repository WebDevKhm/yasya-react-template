const removeItemsFromList = (index, arrayObjects, setMessage) => {
  let newTodos = [...arrayObjects];
  newTodos.splice(index, 1);
  newTodos = newTodos.map((item, index) => ({
    ...item,
    id: index + 1,
  }));
  setMessage(newTodos);
};

export default removeItemsFromList;
