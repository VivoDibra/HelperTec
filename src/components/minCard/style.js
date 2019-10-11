import Styled from 'styled-components/native';

export const Card = Styled.TouchableOpacity`
    border-radius: 10px;
    background-color: #CCC;
    padding: 10px;
`;

export const Title = Styled.Text`
    margin-bottom: 5px;
    font-weight: bold;
`;

export const Description = Styled.Text`
    line-height: 20px;
    font-size: 16px;
`;

export const DeadEnd = Styled.Text`
    line-height: 20px;
    font-size: 18px;
    `;

export const CountDown = Styled.Text``;

export const Section = Styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Button = Styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;