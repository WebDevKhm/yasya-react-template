const searchItemsFromList = (event, messages, setFilteredMessage) => {
  const currentValue = event.target.value;
  if (currentValue !== '') {
    const results = messages.filter(task => {
      return task.taskName.toLowerCase().includes(currentValue.toLowerCase());
    });
    setFilteredMessage(results);
  } else {
    setFilteredMessage(messages);
  }
};

export default searchItemsFromList;
