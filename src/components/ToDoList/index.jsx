import { useState, useMemo } from 'react';
import Tasks from './Tasks/index.jsx';
import handleGetCurrentValue from '../../utils/handleGetCurrentValue.jsx';
import { connect } from 'react-redux';
import {
  addTodos,
  removeTodos,
  isCompleted,
  updateTodos,
} from '../../redux/reducer.jsx';
import PropTypes from 'prop-types';

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

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    setDone: (obj) => dispatch(isCompleted(obj)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
  };
};

const ToDoList = (props) => {
  const [taskToDo, setTask] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [isEditting, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteringState, setFilteringState] = useState('');

  const { todos, addTodo, removeTodo, setDone, updateTodo } = props;

  const filteredMessages = useMemo(() => {
    const filteringTasks = (item, searchTerm) => {
      return item.taskName.toLowerCase().includes(searchTerm.toLowerCase());
    };

    let filteredList = [];

    switch (filteringState) {
      case 'completed':
        filteredList = todos.filter(
          (item) => item.isChecked && filteringTasks(item, searchTerm)
        );
        break;
      case 'incompleted':
        filteredList = todos.filter(
          (item) => !item.isChecked && filteringTasks(item, searchTerm)
        );
        break;
      default:
        filteredList = todos.filter((item) => filteringTasks(item, searchTerm));
    }

    return filteredList;
  }, [todos, searchTerm, filteringState]);

  const formSubmission = (e) => {
    e.preventDefault();
    if (taskToDo === '') {
      alert('Input is empty');
      return;
    }
    addTodo({
      id: todos.length,
      taskName: taskToDo,
      isChecked: false,
    });
    setTask('');
  };

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
        <Form action="" onSubmit={formSubmission}>
          <Label full>
            Task Name
            <TextArea
              onChange={(event) => setTask(event.target.value)}
              value={taskToDo}
            />
          </Label>
          <AddNew>Add Task</AddNew>
        </Form>
        <Label full>
          Search task
          <Input
            type="text"
            placeholder="Search"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </Label>
        {todos.length > 0 ? (
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
                    handleDone={() => setDone(item.id)}
                    isEditting={isEditting}
                    setIsEditing={setIsEditing}
                    currentValue={currentValue}
                    handleUpdate={updateTodo}
                    handleEdit={() =>
                      handleGetCurrentValue(
                        item.id,
                        setIsEditing,
                        todos,
                        setCurrentValue
                      )
                    }
                    handleDelete={() => removeTodo(item.id)}
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

ToDoList.propTypes = {
  addTodo: PropTypes.func,
  todos: PropTypes.array,
  removeTodo: PropTypes.func,
  setDone: PropTypes.func,
  updateTodo: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
