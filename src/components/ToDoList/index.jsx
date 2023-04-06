import { useEffect, useState } from 'react';
import addItemForList from './utils/addItemForList.jsx';
import removeItemsFromList from './utils/removeItemsFromList.jsx';
import handleSearchToDoItem from './utils/searchItemsFromList.jsx';
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
  WrapItemTask,
  Paragraph,
} from '../styled/styles.jsx';
import Sorting from '../Sorting/index.jsx';

const ToDoList = () => {
  const [taskToDo, setTask] = useState('');
  const [dateToDo, setDate] = useState('');
  const [messages, setMessage] = useState([]);
  const [filteredMessage, setFilteredMessage] = useState([]);
  const [isCheckedList, setCheckedList] = useState([]);
  const [currentValue, setCurrentValue] = useState('');
  const [isEditting, setIsEditing] = useState(false);

  const formSubmission = (e) => {
    e.preventDefault();
    addItemForList(setMessage, messages, taskToDo, dateToDo);
    setCheckedList((prev) => [...prev, false]);
  };

  const formSubmissionUpdate = (e) => {
    e.preventDefault();
    messages.map((item) => {
      if (item.id === currentValue.id) {
        item.taskName = taskToDo;
      }
      return item;
    });
    setTask('');
    setIsEditing(false);
  };

  useEffect(() => {
    setFilteredMessage(messages);
  }, [messages]);

  useEffect(() => {
    const filteredCheckedList = isCheckedList.filter(
      (item) => item !== undefined
    );
    setCheckedList(filteredCheckedList);
  }, [messages, setCheckedList, isCheckedList]);

  useEffect(() => {
    if (currentValue) {
      setTask(currentValue.taskName);
    }
  }, [currentValue]);

  const handleOnChangeCheckbox = (idx) => {
    const newCheckedList = [...isCheckedList];
    newCheckedList.splice(idx, 1, !isCheckedList[idx]);
    setCheckedList(newCheckedList);
  };

  const handleOnRemove = (idx) => {
    removeItemsFromList(idx, messages, setMessage);
    removeItemsFromList(idx, isCheckedList, setCheckedList);
  };

  const handleGetCurrentValue = (idx) => {
    setIsEditing(true);
    const newTodos = [...messages];
    setCurrentValue(newTodos[idx]);
  };

  const renderItems = filteredMessage.map((item, idx) => {
    const doneStyle = {
      markItem: {
        textDecoration: 'line-through\n',
      },
    };
    return (
      <ListItem key={idx + 1}>
        <label>
          <CheckBox
            type="checkbox"
            checked={isCheckedList[idx] || false}
            value={isCheckedList[idx] || false}
            onChange={() => handleOnChangeCheckbox(idx)}
          />
        </label>
        <Paragraph style={isCheckedList[idx] ? doneStyle.markItem : {}}>
          {item.taskName} {item.taskDate}
        </Paragraph>
        <WrapItemTask>
          <Button noMargin onClick={() => handleGetCurrentValue(idx)}>
            Edit
          </Button>
          <Button noMargin onClick={() => handleOnRemove(idx)}>
            Remove Item
          </Button>
        </WrapItemTask>
      </ListItem>
    );
  });

  return (
    <>
      <Wrapper>
        <Form
          action=""
          onSubmit={isEditting ? formSubmissionUpdate : formSubmission}
        >
          <Label>
            Task Name
            <Input
              type="text"
              onChange={(event) => setTask(event.target.value)}
              value={taskToDo}
            />
          </Label>
          <Label>
            Date of ToDo
            <Input
              type="date"
              onChange={(event) => setDate(event.target.value)}
              value={dateToDo}
            />
          </Label>
          <Wrapper>
            <AddNew>{isEditting ? 'Confirm' : 'Add Task'}</AddNew>
            {isEditting ? (
              <AddNew onClick={() => setIsEditing(false)}>Cancel</AddNew>
            ) : (
              ''
            )}
          </Wrapper>
        </Form>
        <Label full>
          Search task
          <Input
            type="text"
            placeholder="Search"
            onChange={(event) =>
              handleSearchToDoItem(event, messages, setFilteredMessage)
            }
          />
        </Label>
        {filteredMessage.length > 0 ? (
          <List>
            {renderItems}
            {dateToDo.length > 0 ? (
              <Sorting arrayObjects={filteredMessage} setNewList={setMessage} />
            ) : (
              ''
            )}
          </List>
        ) : (
          ''
        )}
      </Wrapper>
    </>
  );
};

export default ToDoList;
