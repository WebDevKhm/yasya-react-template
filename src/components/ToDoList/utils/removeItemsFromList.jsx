const removeItemsFromList = (index, arrayObjects, setMessage) => {
  const newTodos = [...arrayObjects];
  newTodos.splice(index, 1);
  setMessage(newTodos);
};

export default removeItemsFromList;
