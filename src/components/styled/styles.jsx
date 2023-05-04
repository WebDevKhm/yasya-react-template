import styled from 'styled-components';

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? '#F4EBFF' : '#F4EBFF')};
  color: ${(props) => (props.primary ? '#000' : '#6941C6')};
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin: ${(props) => (props.noMargin ? '0 5px' : '5px')};
  padding: 0.5em 1em;
  cursor: pointer;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  transition: 0.3s ease-in-out;

  :hover {
    color: #fff;
    background: #7f56d9;
  }
`;

export const Input = styled.input`
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  color: #101828;
  font-size: 18px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  transition: 0.3s ease-in-out;

  :focus-visible,
  :active {
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #f4ebff;
    outline: 0;
  }
`;

export const TextArea = styled.textarea`
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  color: #101828;
  font-size: 18px;
  padding: 10px;
  min-height: 100px;
  margin-top: 5px;
  transition: 0.3s ease-in-out;

  :focus-visible,
  :active {
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #f4ebff;
    outline: 0;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
  margin-top: 2%;
  color: #fff;
  font-size: 20px;
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
  box-sizing: border-box;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  background: #7f56d9;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const AddNew = styled.button`
  background: #f9f5ff;
  color: rgb(105, 65, 198);
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  padding: 0.7em 1em;
  cursor: pointer;
  border: 1px solid #f9f5ff;
  border-radius: 8px;
  transition: all 0.3s ease-in-out 0s;
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    background: #b885f6;
    color: #fff;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding-left: 0;
  width: 100%;
  border: 1px solid #7f56d9;
  overflow: hidden;
  border-radius: 8px;
  background: rgb(244, 235, 255);
  margin: 15px auto 0 auto;
`;

export const CheckBox = styled.input`
  width: 25px;
  height: 25px;
  border-radius: 6px;
  list-style: none;
  padding-left: 0;
  margin: 0 10px;
  cursor: pointer;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  color: #53389e;
  font-weight: 600;
  font-size: 20px;
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
  max-width: 65%;
  font-size: 18px;
  margin: 0;
  margin-right: auto;
  word-break: break-word;
`;

export const WrapperFilters = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex-wrap: wrap;
  align-items: center;
  background: rgb(244 235 255);
  padding: 10px 0;
  gap: 2%;
  border-radius: 8px;
`;

export const FilterButton = styled.div`
  background: #ffffff;
  border: 1px solid #7f56d9;
  background: #7f56d9;
  border-radius: 8px;
  padding: 10px 16px;
  cursor: pointer;
  color: #344054;
  font-weight: 600;
  font-size: 16px;
  transition: 0.3s ease-in-out;
  color: #fff;

  :hover {
    background: #6941c6;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  }
`;
