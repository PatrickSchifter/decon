import styled from "styled-components";

export const Button = styled.button`
  background: ${props => props.outro ? 'blue' : 'black'};
  color: white;
  width: 200px;
  height: 30px;
`;
