import styled from "styled-components";

export const InputStyle = styled.input`
    height: 33px;
    color: rgb(0, 0, 0);
    font-family: "MS Sans Serif";
    font-size: 10pt;
    text-decoration: none;
    width: ${props => props.width};
    border-radius: 5px;
    border: 1px solid '#c7c6c6';
`

export const LabelStyle = styled.label`
    font-family: "MS Sans Serif";
    font-size: 10pt;
    color: rgb(0, 0, 0);
    margin-bottom: 5px;
`

const DefaultInput = ({label, inputData, Width}) => {

    const width = Width ? Width : '100px'

    return(
        <div style={{display: 'flex', flexDirection: 'column', height: '50px', width: width}}>
            <LabelStyle for="teste">{label}</LabelStyle>
            <InputStyle type="text" name="teste" value={inputData} width={width} />
        </div>
    )
}

export default DefaultInput;