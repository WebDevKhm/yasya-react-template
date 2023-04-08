import removeItemsFromList from '../../../utils/removeItemsFromList.jsx';
import { Button, CheckBox, ListItem, Paragraph } from '../../styled/styles.jsx';

const Tasks = ({
  filteredMessages,
  handleGetCurrentValue,
  messages,
  setMessage,
  setIsEditing,
  setCurrentValue,
  isEditting,
}) => {
  let isChecked;

  const handleOnRemove = (idx) => {
    removeItemsFromList(idx, messages, setMessage, true);
  };

  const checkHandler = (itemId) => {
    setMessage((prevState) =>
      prevState.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  return filteredMessages.map((item) => {
    const doneStyle = {
      markItem: {
        textDecoration: 'line-through\n',
      },
    };
    return (
      <ListItem key={item.id + 1}>
        <label>
          <CheckBox
            type="checkbox"
            checked={item.isChecked || false}
            value={isChecked || false}
            onChange={() => checkHandler(item.id)}
          />
        </label>
        <Paragraph style={item.isChecked ? doneStyle.markItem : {}}>
          {item.taskName}
        </Paragraph>
        <Button
          noMargin
          onClick={() =>
            handleGetCurrentValue(
              item.id,
              setIsEditing,
              messages,
              setCurrentValue
            )
          }
        >
          Edit
        </Button>
        <Button
          noMargin
          onClick={() => handleOnRemove(item.id)}
          disabled={isEditting ? true : ''}
        >
          Remove Item
        </Button>
      </ListItem>
    );
  });
};

export default Tasks;
