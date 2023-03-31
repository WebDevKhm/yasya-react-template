import {useState} from "react";
import addItemForList from "./utils/addItemForList";
import removeItemsFromList from "./utils/removeItemsFromList";
import isDoneItem from "./utils/isDone";
import {Button, Wrapper, Form, Input, Label, AddNew, List} from "../styled/styles";
import Sorting from "../Sorting";

const ToDoList = () => {

  const [taskToDo, setTask] = useState('');
  const [dateToDo, setDate] = useState('');
  const [messages, setMessage] = useState([])

  const formSubmission = (e) => {
    e.preventDefault();
    addItemForList(setMessage, messages, taskToDo, dateToDo);
  }

  const renderItems = messages.map((item, idx) => {
    const doneStyle = {
      markItem: {
        textDecoration: 'line-through\n'
      }
    }
    return (
      <li style={item.isDone && doneStyle.markItem} key={idx + 1}>
        {item.taskName} - {item.taskDate}
        <Button onClick={() => isDoneItem(idx, messages, setMessage)}>Mark as Done</Button>
        <Button primary onClick={() => removeItemsFromList(idx, messages, setMessage)}>Remove Item</Button>
      </li>
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
