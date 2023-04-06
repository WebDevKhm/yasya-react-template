import styled from 'styled-components';

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? '#FFFFFF' : '#000000')};
  color: ${(props) => (props.primary ? '#000' : '#fff')};
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin: ${(props) => (props.noMargin ? '0 5px' : '5px')};
  padding: 0.25em 1em;
  cursor: pointer;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
`;

export const Input = styled.input`
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  color: #101828;
  font-size: 18px;
  padding: 10px;
  margin-top: 5px;
  transition: 0.3s easy-in-out;

  :focus-visible,
  :active {
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #f4ebff;
    ouline: none;
  }
`;

export const TextArea = styled.textarea`
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  color: #101828;
  font-size: 18px;
  padding: 10px;
  margin-top: 5px;
  transition: 0.3s easy-in-out;

  :focus-visible,
  :active {
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #f4ebff;
    ouline: none;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 2%;
  margin-top: 2%;
  width: ${(props) => (props.full ? '100%' : '49%')};
  ::placeholder {
    color: palevioletred;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: flex-start;
  gap: 2%;
  width: 100%;
  margin: 0 auto;
  font-size: 16px;
  font-weight: 600;
  flex-wrap: wrap;

  ::placeholder {
    color: palevioletred;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  padding: 0 16px;
`;

export const AddNew = styled.button`
  background: #1da1f2;
  color: #fff;
  padding: 10px 16px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin: 5px;
  cursor: pointer;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  border: 0;
  width: 100%;
  transition: 0.3s easy-in-out;

  &:hover {
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    background: #0c8bd9;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding-left: 0;
  width: 100%;
  border: 1px solid;
  border-radius: 8px;
`;

export const CheckBox = styled.input`
  width: 25px;
  height: 25px;
  border-radius: 6px;
  list-style: none;
  padding-left: 0;
  margin: 0 5px;
  cursor: pointer;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid;
`;

export const WrapItemTask = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: auto;
  justify-content: flex-end;
`;

export const Paragraph = styled.p`
  display: flex;
  width: 100%;
  max-width: 250px;
  font-size: 18px;
  margin: 0;
  margin-right: auto;
`;
