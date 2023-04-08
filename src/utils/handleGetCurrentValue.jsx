const handleGetCurrentValue = (
  idx,
  setIsEditing,
  messages,
  setCurrentValue
) => {
  setIsEditing(true);
  const newTodos = [...messages];
  setCurrentValue(newTodos[idx]);
};

export default handleGetCurrentValue;
