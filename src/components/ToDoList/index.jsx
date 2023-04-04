import { useState } from 'react';
import addItemForList from './utils/addItemForList';
import removeItemsFromList from './utils/removeItemsFromList';
import {
  Button,
  Wrapper,
  Form,
  Input,
  Label,
  AddNew,
  List,
  CheckBox,
  ListItem,
} from '../styled/styles';
import Sorting from '../Sorting';

const ToDoList = () => {
  const [taskToDo, setTask] = useState('');
  const [dateToDo, setDate] = useState('');
  const [messages, setMessage] = useState([]);
  const [isCheckedList, setCheckedList] = useState([false]);

  const formSubmission = e => {
    e.preventDefault();
    addItemForList(setMessage, messages, taskToDo, dateToDo);
    addItemForList(setMessage, messages, taskToDo, dateToDo);
  };

  const handleOnChange = idx => {
    let newCheckedList = [...isCheckedList];
    newCheckedList.splice(idx, 1, !isCheckedList[idx]);
    setCheckedList(newCheckedList);
  };

  const handleOnRemove = idx => {
    removeItemsFromList(idx, messages, setMessage);
    removeItemsFromList(idx, isCheckedList, setCheckedList);
  };

  const renderItems = messages.map((item, idx) => {
    const doneStyle = {
      markItem: {
        textDecoration: 'line-through\n',
      },
    };
    return (
      <ListItem key={idx + 1}>
        <p style={isCheckedList[idx] ? doneStyle.markItem : {}}>
          {item.taskName} - {item.taskDate}
        </p>
        <label>
          <CheckBox
            type="checkbox"
            checked={isCheckedList[idx]}
            onChange={() => handleOnChange(idx)}
          />
        </label>
        <Button primary onClick={() => handleOnRemove(idx)}>
          Remove Item
        </Button>
      </ListItem>
    );
  });

  return (
    <>
      <Wrapper>
        <Form action="" onSubmit={formSubmission}>
          <Label>
            Task Name
            <Input type="text" onChange={event => setTask(event.target.value)} value={taskToDo} />
          </Label>
          <Label>
            Date of ToDo
            <Input type="date" onChange={event => setDate(event.target.value)} value={dateToDo} />
          </Label>
          <AddNew>Add Task</AddNew>
          <Input type="text" />
        </Form>
        {renderItems.length > 0 ? (
          <List>
            {renderItems}
            <Sorting arrayObjects={messages} setNewList={setMessage} />
          </List>
        ) : (
          ''
        )}
      </Wrapper>
    </>
  );
};

export default ToDoList;
