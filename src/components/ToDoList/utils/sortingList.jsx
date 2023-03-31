const initSort = (arrayObjects, setNewList) => {
  arrayObjects.sort((item, index) => {
    return item.taskDate.split('/').reverse().join().localeCompare(index.taskDate.split('/').reverse().join());
  })
  setNewList(arrayObjects);
}

// const Sorting = ({arrayObjects, setNewList}) => {
//   return (<div>
//     <Button primary onClick={() => {
//       initSort(arrayObjects, setNewList)
//     }}>Sort by date</Button>
//   </div>)
//
// }

export default initSort;
