import Styled from "styled-components/native";

export const Container = Styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: #7159c1;
`;
export const Box = Styled.TouchableOpacity`
    width: 30%;
    height: 20%;
    flex-direction: column;
    background-color: #FFF;
    align-items: center;
    justify-content: center;
    border: 2px solid #FF2525;
    border-radius: 10px;
`;

export const Desc = Styled.Text`
    font-weight: bold;
    font-family: sans-serif;
    font-size: 16px;
    color: #000;
`;
