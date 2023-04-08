const handleOnChangeCheckbox = (idx, isCheckedList, setCheckedList) => {
  const newCheckedList = [...isCheckedList];
  newCheckedList[idx].checked = !newCheckedList[idx].checked;
  setCheckedList(newCheckedList);
};

export default handleOnChangeCheckbox;
