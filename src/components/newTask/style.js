import Styled from "styled-components/native";

export const Container = Styled.View`
    flex: 1;
    background-color: #CCC;
    flex-direction: column;
    align-items: flex-start;
`;

export const Input = Styled.TextInput`
    flex: 1;
    height: 40px;
    background-color: #FFF;
    border: none;
    font-weight: bold;
    font-size: 14px;
    font-family: sans-serif;
    margin: 10px 10px 0px 10px;
    padding-left: 10px;
`;

export const Button = Styled.TouchableOpacity`
    height: 40px;
    width: 40px;
    background-color: #FFF;
    border-radius: 5px;
    margin: 10px 10px 0px 0px;
    justify-content: center;
    align-items: center;
`;

export const Text = Styled.Text`
    font-family: sans-serif;
    color: #000;
    font-weight: bold;
    font-size: 18px;
    margin: 10px 0px 10px 10px;
`;

export const Group = Styled.View`
    flex-direction: row;
`;

export const TextBox = Styled.TextInput`
    flex: 1;
    height: 100px;
    background-color: #FFF;
    margin: 10px 10px 0px 10px;
    padding-left: 10px;
    padding-bottom: 20%;
`;