import {useState} from "react";
import addItemForList from "./utils/addItemForList";
import removeItemsFromList from "./utils/removeItemsFromList";
import {Button, Wrapper, Form, Input, Label, AddNew, List, CheckBox, ListItem} from "../styled/styles";
import Sorting from "../Sorting";
import * as PropTypes from "prop-types";

function Checkbox(props) {
  return null;
}

Checkbox.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string
};
const ToDoList = () => {

  const [taskToDo, setTask] = useState('');
  const [dateToDo, setDate] = useState('');
  const [messages, setMessage] = useState([])
  const [isCheckedList, setCheckedList] = useState([]);

  function Checkbox(props) {
    return null;
  }

  Checkbox.propTypes = {
    onChange: PropTypes.func,
    label: PropTypes.string
  };

  const formSubmission = (e) => {
    e.preventDefault();
    addItemForList(setMessage, messages, taskToDo, dateToDo);
  }

  const handleOnChange = (idx) => {
    let newCheckedList = [...isCheckedList];
    newCheckedList[idx] = !newCheckedList[idx];
    setCheckedList(newCheckedList);
  }

  const handleOnRemove = (idx) => {
    removeItemsFromList(idx, messages, setMessage);
    removeItemsFromList(idx, isCheckedList, setCheckedList);
  }

  const renderItems = messages.map((item, idx) => {
    const doneStyle = {
      markItem: {
        textDecoration: 'line-through\n'
      }
    }
    console.log(isCheckedList);
    return (
      <ListItem key={idx + 1}>
        <p style={isCheckedList[idx] ? doneStyle.markItem : {}}>{item.taskName} - {item.taskDate}</p>
        <label>
          <CheckBox type="checkbox" checked={isCheckedList[idx]} onChange={() => handleOnChange(idx)}/>
        </label>
        <Button primary onClick={() => handleOnRemove(idx)}>Remove Item</Button>
      </ListItem>
    )
  })

  return (
    <>
      <Wrapper>
        <Form action="" onSubmit={formSubmission}>
          <Label htmlFor=''>
            Task Name
            <Input type="text" onChange={event => setTask(event.target.value)} value={taskToDo}/>
          </Label>
          <Label htmlFor=''>
            Date of ToDo
            <Input type="date" onChange={event => setDate(event.target.value)} value={dateToDo}/>
          </Label>
          <AddNew>Add Task</AddNew>
        </Form>
        {renderItems.length > 0 ? (
          <List>
            {renderItems}
            <Sorting arrayObjects={messages} setNewList={setMessage}/>
          </List>
        ) : ''}
      </Wrapper>
    </>
  )
}

export default ToDoList;
