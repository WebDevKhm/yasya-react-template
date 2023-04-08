import { useState } from 'react';
import { Button, CheckBox, ListItem, Paragraph } from '../../styled/styles.jsx';

const Tasks = ({
  filteredMessages,
  handleOnRemove,
  checkHandler,
  handleGetCurrentValue,
  setCurrentValue,
  messages,
}) => {
  let isChecked;
  const [isEditting, setIsEditing] = useState(false);
  return filteredMessages.map((item) => {
    const doneStyle = {
      markItem: {
        textDecoration: 'line-through\n',
      },
    };
    console.log(item);
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
