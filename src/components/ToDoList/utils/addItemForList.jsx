const addItemForList = (setMessageState, messages, name, date) => {
  if (!name) {
    alert('Name of item is empty')
    return;
  }
  setMessageState([...messages, {taskName: name, taskDate: date}]);
}

export default addItemForList;
