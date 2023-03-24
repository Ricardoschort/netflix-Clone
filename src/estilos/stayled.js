import styled from 'styled-components'



export const Button = styled.button`
    border: none;
    outline: none;
    width:${props => props.primary ? '120px':'340px'};
    border-radius: 5px;
    padding: 12px 10px;
    cursor: pointer;
    background-color: rgb(219, 0, 0);
    color: aliceblue;
    font-size: 15px;
    font-weight: bold;

`;
export const InputLogin = styled.input`
    border: none;
    outline: none;
    border-radius:5px;
    background-color: ${props => props.primary ? 'aliceblue' : 'rgba(54, 54, 54, 0.808)'};
    width:${props => props.primary ? '245px':'320px'};
    padding: 12px 10px;
    margin:10px 0px;
    cursor: pointer;

    &::placeholder {
        color: ${props => props.white ? 'aliceblue' : 'black'}
    }
 `
