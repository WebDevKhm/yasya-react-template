const isDoneItem = (index, arrayObjects, setMessage) => {
  const newTodos = [...arrayObjects];
  newTodos[index].isDone = true
  setMessage(newTodos);
}

export default isDoneItem;
