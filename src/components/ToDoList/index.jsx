import { useState, useMemo, useEffect } from 'react';
import addItemForList from '../../utils/addItemForList.jsx';
import removeItemsFromList from '../../utils/removeItemsFromList.jsx';
import Tasks from './Tasks/index.jsx';
import handleGetCurrentValue from '../../utils/handleGetCurrentValue.jsx';
import {
  Wrapper,
  Form,
  Input,
  Label,
  AddNew,
  List,
  TextArea,
  FilterButton,
  WrapperFilters,
} from '../styled/styles.jsx';

const ToDoList = () => {
  const [taskToDo, setTask] = useState('');
  const [messages, setMessage] = useState([]);
  const [currentValue, setCurrentValue] = useState('');
  const [isEditting, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteringState, setFilteringState] = useState('');

  const filteredMessages = useMemo(() => {
    const filteringTasks = (item, searchTerm) => {
      return item.taskName.toLowerCase().includes(searchTerm.toLowerCase());
    };

    let filteredList = [];

    switch (filteringState) {
      case 'completed':
        filteredList = messages.filter(
          (item) => item.isChecked && filteringTasks(item, searchTerm)
        );
        break;
      case 'incompleted':
        filteredList = messages.filter(
          (item) => !item.isChecked && filteringTasks(item, searchTerm)
        );
        break;
      default:
        filteredList = messages.filter((item) =>
          filteringTasks(item, searchTerm)
        );
    }

    return filteredList;
  }, [messages, searchTerm, filteringState]);

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

  const checkHandler = (itemId) => {
    setMessage((prevState) =>
      prevState.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  useEffect(() => {
    if (currentValue) {
      setTask(currentValue.taskName);
    }
  }, [currentValue]);

  const handleFiltering = (filterHandle) => {
    switch (filterHandle) {
      case 'completed':
        setFilteringState('completed');
        break;
      case 'incompleted':
        setFilteringState('incompleted');
        break;
      default:
        setFilteringState('all');
    }
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
        {messages.length > 0 ? (
          <>
            <WrapperFilters>
              <FilterButton onClick={() => handleFiltering()}>All</FilterButton>
              <FilterButton onClick={() => handleFiltering('completed')}>
                Completed
              </FilterButton>
              <FilterButton onClick={() => handleFiltering('incompleted')}>
                In progress
              </FilterButton>
            </WrapperFilters>
            <List>
              {filteredMessages.map((item) => {
                return (
                  <Tasks
                    item={item}
                    key={item.id}
                    isEditting={isEditting}
                    setMessage={setMessage}
                    handleEdit={() =>
                      handleGetCurrentValue(
                        item.id,
                        setIsEditing,
                        messages,
                        setCurrentValue
                      )
                    }
                    handleDelete={() =>
                      removeItemsFromList(item.id, messages, setMessage, true)
                    }
                    handleCheckBoxChecking={() => checkHandler(item.id)}
                  />
                );
              })}
            </List>
          </>
        ) : (
          'No tasks found.'
        )}
      </Wrapper>
    </>
  );
};

export default ToDoList;
