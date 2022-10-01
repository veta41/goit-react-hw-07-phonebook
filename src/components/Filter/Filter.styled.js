import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 24px;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.25;
`;

export const Input = styled.input`
  margin-top: 10px;
  width: 450px;
  height: 50px;
  font-weight: 400;
  font-size: 25px;
  line-height: 1.25;
  border: 2px solid #b5b5a7;
  border-radius: 5px;
`;

export const FilterText = styled.p`
  font-weight: 600;
  margin-bottom: 5px;
`;
