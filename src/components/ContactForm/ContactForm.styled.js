import styled from 'styled-components';

export const Form = styled.form`
  padding: 20px;
  display: flex;
  row-gap: 20px;
  font-size: 1.2em;
  flex-direction: column;
  gap: 10px;
  background-color: #e3e3e3;
  border-radius: 10px;
  margin-bottom: 24px;
  width: 500px; ;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  height: 50px;
  width: 100%;
  padding: 0 10px 0 10px;
  border: 1px solid #91918d;
  border-radius: 5px;
  &::placeholder {
    font-size: 12px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: #9e9e99;
  color: white;
  font-size: 25px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
