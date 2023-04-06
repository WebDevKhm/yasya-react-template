const addItemForList = (setMessageState, messages, name, date) => {
  if (!name) {
    alert('Name of item is empty');
    return;
  }
  setMessageState([...messages, { id: messages.length + 1, taskName: name, taskDate: date }]);
};

export default addItemForList;
