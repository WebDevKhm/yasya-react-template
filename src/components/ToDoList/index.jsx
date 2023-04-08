import { useEffect, useState, useMemo } from 'react';
import addItemForList from '../../utils/addItemForList.jsx';
import Tasks from './Tasks/index.jsx';
import removeItemsFromList from '../../utils/removeItemsFromList.jsx';
import handleGetCurrentValue from '../../utils/handleGetCurrentValue.jsx';
import {
  Wrapper,
  Form,
  Input,
  Label,
  AddNew,
  List,
  TextArea,
} from '../styled/styles.jsx';

const ToDoList = () => {
  const [taskToDo, setTask] = useState('');
  const [messages, setMessage] = useState([]);
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
    removeItemsFromList(idx, messages, setMessage, true);
  };

  const checkHandler = (itemId) => {
    setMessage((prevState) =>
      prevState.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

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
        {filteredMessages.length > 0 ? (
          <List>
            {
              <Tasks
                filteredMessages={filteredMessages}
                handleOnRemove={handleOnRemove}
                checkHandler={checkHandler}
                handleGetCurrentValue={handleGetCurrentValue}
                setCurrentValue={setCurrentValue}
                messages={messages}
              />
            }
          </List>
        ) : (
          ''
        )}
      </Wrapper>
    </>
  );
};

export default ToDoList;
