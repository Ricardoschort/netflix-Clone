import styled from 'styled-components'

const handleWide = wide =>{
    switch (wide) {
        case "fullwidth": return "100%"

        case "medium": return "180px"
    
        default: return "120px"
    }
}

export const Button = styled.button`
    border: none;
    outline: none;
     border-radius: 5px;
    padding: 12px 10px;
    cursor: pointer;
    background-color:  ${props => props.color === "gray" ? "lightgray" :"rgb(219, 0, 0)" };
    color: ${props => props.secundary ? "black" : "aliceblue"};
    font-size: 16px;
    width:${({wide})=> handleWide(wide)};
`;
export const InputLogin = styled.input`
    border: none;
    outline: none;
    border-radius:7px;
    background-color: ${props => props.primary ? 'aliceblue' : 'rgba(54, 54, 54, 0.808)'};
    width:${props => props.primary ? '245px':'320px'};
    padding: 16px 10px;
    margin:10px 0px;
    cursor: pointer;
    color:white

    &::placeholder {
        color: ${props => props.white ? 'aliceblue' : 'black'};
    }
 `
