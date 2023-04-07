const handleOnChangeCheckbox = (idx, isCheckedList, setCheckedList) => {
  const newCheckedList = [...isCheckedList];
  newCheckedList.splice(idx, 1, !isCheckedList[idx]);
  setCheckedList(newCheckedList);
};

export default handleOnChangeCheckbox;
