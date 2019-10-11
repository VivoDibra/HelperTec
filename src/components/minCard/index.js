import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  Card,
  Title,
  Description,
  DeadEnd,
  CountDown,
  Section,
  Button
} from './style';

export default class MinCard extends React.Component {
  CountForDeadend() {
    const Count = '00:00:00';
    /*Pegar o deadend (prazo final da task), 
        e fazer a conta de quanto tempo falta, 
        se faltar pouco tempo, exibir contagem no card*/
    return <CountDown>{Count}</CountDown>;
  }

  render() {
    return (
      <Card>
        <Section>
          <Title>{this.props.title}</Title>
          <DeadEnd>{this.props.deadend}</DeadEnd>
        </Section>

        <Description>{this.props.description}</Description>
        {this.CountForDeadend()}
        
        <Section>
          <Button color="green">
            <Icon name="tool" size={16} color="#000" />
            <Title>Editar</Title>
          </Button>
          <Button color="red">
            <Icon name="delete" size={16} color="#000" />
            <Title>Excluir</Title>
          </Button>
        </Section>
      </Card>
    );
  }
}
