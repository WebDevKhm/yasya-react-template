import { Button, CheckBox, ListItem, Paragraph } from '../../styled/styles.jsx';
import PropTypes from 'prop-types';
import FormEdit from '../FormEdit/index.jsx';
import { connect } from 'react-redux';

const Tasks = ({
  item,
  isEditting,
  handleEdit,
  handleDelete,
  setIsEditing,
  currentValue,
  handleDone,
  handleUpdate,
}) => {
  const { id, taskName, isChecked } = item;

  const onUpdate = (editTask) => {
    handleUpdate({ editTask, id });
    setIsEditing(false);
  };

  const doneStyle = {
    markItem: {
      textDecoration: 'line-through\n',
    },
  };
  console.log(currentValue);
  return (
    <ListItem>
      {isEditting && currentValue.id === id ? (
        <FormEdit
          handleUpdate={onUpdate}
          defaultValue={item.taskName}
          handleCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <label>
            <CheckBox
              type="checkbox"
              checked={isChecked || false}
              value={isChecked || false}
              onChange={() => handleDone(id)}
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
            onClick={() => handleDelete(id)}
            disabled={isEditting ? true : ''}
          >
            Remove Item
          </Button>
        </>
      )}
    </ListItem>
  );
};

Tasks.propTypes = {
  item: PropTypes.object.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  isEditting: PropTypes.bool.isRequired,
  setIsEditing: PropTypes.func.isRequired,
  currentValue: PropTypes.object.isRequired || null,
  handleDone: PropTypes.func.isRequired,
};

export default connect(null, null)(Tasks);
