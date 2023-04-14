import { Input, Button, Form } from '../../styled/styles.jsx';
import propTypes from 'prop-types';
const FormEdit = ({
  handleUpdate,
  taskToDoEdit,
  setTaskEdit,
  setIsEditing,
}) => {
  FormEdit.propTypes = {
    setTaskEdit: propTypes.func.isRequired,
    taskToDoEdit: propTypes.string.isRequired,
    handleUpdate: propTypes.func.isRequired,
    setIsEditing: propTypes.func.isRequired,
  };

  return (
    <>
      <Form className="formEdit" action="" onSubmit={(e) => handleUpdate(e)}>
        <Input
          type="text"
          value={taskToDoEdit}
          onChange={(event) => setTaskEdit(event.target.value)}
        />
        <Button>Confirm</Button>
        <Button onClick={() => setIsEditing(false)}>Cancel</Button>
      </Form>
    </>
  );
};

export default FormEdit;
