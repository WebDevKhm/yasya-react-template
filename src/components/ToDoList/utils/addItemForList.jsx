const addItemForList = (setMessageState, messages, name, date) => {
  setMessageState([...messages, {taskName: name, taskDate: date}]);
}

export default addItemForList;
