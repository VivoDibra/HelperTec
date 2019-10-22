import Styled from 'styled-components/native';

export const Card = Styled.TouchableOpacity`
    border-radius: 10px;
    background-color: #CCC;
    padding: 10px;
    margin-bottom: 10px;
`;

export const Title = Styled.Text`
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: bold;
`;

export const Description = Styled.Text`
    line-height: 20px;
    font-size: 16px;
    margin-bottom: 5px;
`;

export const DeadEnd = Styled.Text`
    line-height: 20px;
    font-size: 14px;
    `;

export const CountDown = Styled.Text``;

export const Section = Styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Button = Styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${props => props.color};
    padding: 10px;
    height: 100%;
`;
