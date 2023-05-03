const handleGetCurrentValue = (idx, setIsEditing, todos, setCurrentValue) => {
  setIsEditing(true);
  const newTodos = [...todos];
  setCurrentValue(newTodos[idx]);
};

export default handleGetCurrentValue;
