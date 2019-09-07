import Styled from "styled-components/native";

export const Container = Styled.View`
    flex: 1;
    background-color: #FFF;
    flex-direction: column;
    align-content: center;
    justify-content: center;
`;

export const Input = Styled.TextInput`
    width: 60%;
    height: 40px;
    background-color: #FFF;
    border: none;
    font-weight: bold;
    font-size: 14px;
    font-family: sans-serif;
`;

export const Text = Styled.Text`
    font-family: sans-serif;
    color: #000;
    font-weight: bold;
    font-size: 18px;
`;

export const Group = Styled.View`
    margin-left: ;
    flex-direction: row;
`;
