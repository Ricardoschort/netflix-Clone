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
    border-radius: ${props => props.borderNone ? "2px":"7px"};
    padding: 12px 10px;
    cursor: pointer;
    background-color:  ${props => props.color === "gray" ? "lightgray" :"rgb(219, 0, 0)" };
    color: ${props => props.secundary ? "black" : "aliceblue"};
    font-size: 16px;
    width:${({wide})=> handleWide(wide)};
    @media (max-width: 450px) {
        width: 90px;
        padding:7px;
`;
export const InputLogin = styled.input`
    border: none;
    outline: none;
    border-radius:${props => props.borderNone ? "2px":"7px"};
    background-color: ${props => props.primary ? 'aliceblue' : 'rgba(54, 54, 54, 0.808)'};
    width:${props => props.primary ? '245px':'320px'};
    padding: 12px 10px;
    margin:10px 0px;
    color: ${props => props.white ? "aliceblue":'black'};
    cursor: pointer;

    &::placeholder {
        color: ${props => props.whitePlace ? 'aliceblue' : 'black'};
        font-size:14px;
        letter-spacing :1.1px
    }
    @media (max-width: 450px) {
        width: 220px;
 `

