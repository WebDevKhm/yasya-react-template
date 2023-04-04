import styled from 'styled-components';

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};
  font-size: 1em;
  margin: 5px;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  margin-top: 5px;

  ::placeholder {
    color: palevioletred;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 600;
  width: 49%;
  margin-bottom: 2%;

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
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  padding: 10px;
`;

export const AddNew = styled.button`
  text-decoration: none;
  width: 100%;
  background-color: hsla(189, 85%, 28%, 1);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0125), 0 1px 1px rgba(0, 0, 0, 0.05);
  color: #fff;
  padding: 10px;
  font-weight: 400;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  letter-spacing: 2px;

  &:hover {
    background-color: hsla(189, 85%, 32%, 1);
  }
`;

export const List = styled.ul`
  list-style: none;
  padding-left: 0;
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
`;
