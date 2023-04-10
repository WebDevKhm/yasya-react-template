import { Button, CheckBox, ListItem, Paragraph } from '../../styled/styles.jsx';
import propTypes from 'prop-types';

const Tasks = ({
  item,
  isEditting,
  handleEdit,
  handleDelete,
  handleCheckBoxChecking,
}) => {
  const { taskName, isChecked } = item;

  Tasks.propTypes = {
    item: propTypes.object.isRequired,
    setMessage: propTypes.func.isRequired,
    handleEdit: propTypes.func.isRequired,
    handleDelete: propTypes.func.isRequired,
    handleCheckBoxChecking: propTypes.func.isRequired,
    isEditting: propTypes.bool.isRequired,
  };

  const doneStyle = {
    markItem: {
      textDecoration: 'line-through\n',
    },
  };
  return (
    <ListItem>
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
    </ListItem>
  );
};

export default Tasks;
