import { Input, Button } from '../../styled/styles.jsx';
import PropTypes from 'prop-types';
import { useState } from 'react';

const FormEdit = ({ handleUpdate, handleCancel, defaultValue }) => {
  const [taskToEdit, setTaskEdit] = useState(defaultValue);
  const handleChange = (e) => {
    return setTaskEdit(e.target.value);
  };

  return (
    <>
      <Input
        type="text"
        value={taskToEdit}
        onChange={(event) => handleChange(event)}
      />
      <Button onClick={() => handleUpdate(taskToEdit)}>Confirm</Button>
      <Button onClick={handleCancel}>Cancel</Button>
    </>
  );
};

FormEdit.propTypes = {
  handleUpdate: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired,
};

export default FormEdit;
