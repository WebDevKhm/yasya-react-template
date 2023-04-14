import { Button, CheckBox, ListItem, Paragraph } from '../../styled/styles.jsx';
import propTypes from 'prop-types';
import FormEdit from '../FormEdit/index.jsx';

const Tasks = ({
  item,
  isEditting,
  handleEdit,
  handleDelete,
  handleCheckBoxChecking,
  setIsEditing,
  setTaskEdit,
  taskToDoEdit,
  currentValue,
  handleUpdate,
}) => {
  const { id, taskName, isChecked } = item;

  Tasks.propTypes = {
    item: propTypes.object.isRequired,
    setTaskEdit: propTypes.func.isRequired,
    taskToDoEdit: propTypes.string.isRequired,
    handleEdit: propTypes.func.isRequired,
    handleDelete: propTypes.func.isRequired,
    handleUpdate: propTypes.func.isRequired,
    handleCheckBoxChecking: propTypes.func.isRequired,
    isEditting: propTypes.bool.isRequired,
    setIsEditing: propTypes.func.isRequired,
    currentValue: propTypes.object.isRequired,
  };

  const doneStyle = {
    markItem: {
      textDecoration: 'line-through\n',
    },
  };
  return (
    <ListItem>
      {isEditting && currentValue.id === id ? (
        <FormEdit
          handleUpdate={handleUpdate}
          taskToDoEdit={taskToDoEdit}
          setTaskEdit={setTaskEdit}
          setIsEditing={setIsEditing}
        />
      ) : (
        <>
          <label>
            <CheckBox
              type="checkbox"
              defaultChecked={false}
              checked={isChecked || false}
              value={isChecked || false}
              onChange={() => handleCheckBoxChecking()}
            />
          </label>
          <Paragraph style={isChecked ? doneStyle.markItem : {}}>
            {taskName}
          </Paragraph>
          <Button noMargin onClick={() => handleEdit()}>
            Edit
          </Button>
          <Button
            noMargin
            onClick={() => handleDelete()}
            disabled={isEditting ? true : ''}
          >
            Remove Item
          </Button>
        </>
      )}
    </ListItem>
  );
};

export default Tasks;
