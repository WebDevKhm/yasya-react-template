import { useEffect, useState, useMemo } from 'react';
import addItemForList from './utils/addItemForList.jsx';
import removeItemsFromList from './utils/removeItemsFromList.jsx';
import handleGetCurrentValue from './utils/handleGetCurrentValue.jsx';
import handleOnChangeCheckbox from './utils/handleOnChangeCheckbox.jsx';
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
  TextArea,
  Paragraph,
} from '../styled/styles.jsx';

const ToDoList = () => {
  const [taskToDo, setTask] = useState('');
  const [messages, setMessage] = useState([]);
  const [isCheckedList, setCheckedList] = useState([]);
  const [currentValue, setCurrentValue] = useState('');
  const [isEditting, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMessages = useMemo(() => {
    return messages.filter((item) =>
      item.taskName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [messages, searchTerm]);

  const formSubmission = (e) => {
    e.preventDefault();
    addItemForList(setMessage, messages, taskToDo, setTask);
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
    if (currentValue) {
      setTask(currentValue.taskName);
    }
  }, [currentValue]);

  const handleOnRemove = (idx) => {
    removeItemsFromList(idx, messages, setMessage);
    removeItemsFromList(idx, isCheckedList, setCheckedList);
  };

  const renderItems = filteredMessages.map((item, idx) => {
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
            onChange={() =>
              handleOnChangeCheckbox(idx, isCheckedList, setCheckedList)
            }
          />
        </label>
        <Paragraph style={isCheckedList[idx] ? doneStyle.markItem : {}}>
          {item.taskName}
        </Paragraph>
        <Button
          noMargin
          onClick={() =>
            handleGetCurrentValue(idx, setIsEditing, messages, setCurrentValue)
          }
        >
          Edit
        </Button>
        <Button
          noMargin
          onClick={() => handleOnRemove(idx)}
          disabled={isEditting ? true : ''}
        >
          Remove Item
        </Button>
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
          <Label full>
            Task Name
            <TextArea
              onChange={(event) => setTask(event.target.value)}
              value={taskToDo}
            />
          </Label>
          <AddNew>{isEditting ? 'Confirm' : 'Add Task'}</AddNew>
          {isEditting ? (
            <AddNew onClick={() => setIsEditing(false)}>Cancel</AddNew>
          ) : (
            ''
          )}
        </Form>
        <Label full>
          Search task
          <Input
            type="text"
            placeholder="Search"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </Label>
        {filteredMessages.length > 0 ? <List>{renderItems}</List> : ''}
      </Wrapper>
    </>
  );
};

export default ToDoList;
