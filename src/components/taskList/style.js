import Styled from "styled-components/native";

export const Container = Styled.View`
    flex: 1;
    flex-direction: column;
    background-color: #CCF;
    padding: 10px 10px 0px 10px;

`;

export const Button = Styled.TouchableOpacity`
    background-color: #FFF;
    border: 1px dashed #000;
    padding: 10px;
    align-self: flex-end;
    margin-bottom: 10px;
    border-radius: 5px;
`;