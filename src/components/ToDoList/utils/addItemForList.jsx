const addItemForList = (setMessageState, messages, name, setTask) => {
  if (!name) {
    alert('Name of item is empty');
    return;
  }
  setMessageState([...messages, { id: messages.length + 1, taskName: name }]);
  setTask('');
};

export default addItemForList;
