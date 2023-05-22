import styled from "styled-components";

export const DefaultButton = styled.button`
    color: #fff;
    background-color: ${props => props.Orange ? '#ea5c11' : '#2C3D5B'} ;
    border-color: ${props => props.Orange ? '#ea5c11' : '#2C3D5B'};
    font-family: sans-serif;
    border-radius: 5px;
    border: 1px solid white;
    width: ${props => props.Width ? props.Width : '100px'} ;
    height: 35px;
`