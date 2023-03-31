import {Button} from "../styled/styles";
import {logDOM} from "@testing-library/react";

const initSort = (arrayObjects, setNewList) => {
  const sortedArray = [...arrayObjects].sort((a, b) => {
    const dateA = new Date(a.taskDate);
    const dateB = new Date(b.taskDate);
    return dateA - dateB;
  });
  setNewList(sortedArray);
}

const Sorting = ({arrayObjects, setNewList}) => {
  return (<div>
    <Button primary onClick={() => {
      initSort(arrayObjects, setNewList)
    }}>Sort by date</Button>
  </div>)

}

export default Sorting;
