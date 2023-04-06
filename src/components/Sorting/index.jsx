import { Button } from '../styled/styles.jsx';
import propTypes from 'prop-types';

const initSort = (arrayObjects, setNewList) => {
  const sortedArray = [...arrayObjects].sort((a, b) => {
    const dateA = new Date(a.taskDate);
    const dateB = new Date(b.taskDate);
    return dateA - dateB;
  });
  setNewList(sortedArray);
};

const Sorting = ({ arrayObjects, setNewList }) => {
  return (
    <div>
      <Button
        primary
        onClick={() => {
          initSort(arrayObjects, setNewList);
        }}
      >
        Sort by date
      </Button>
    </div>
  );
};

Sorting.propTypes = {
  arrayObjects: propTypes.array.isRequired,
  setNewList: propTypes.func.isRequired,
};

export default Sorting;
