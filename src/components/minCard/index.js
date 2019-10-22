import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { withNavigation } from 'react-navigation'

import getRealm from '../../services/realm';
import {
  Card,
  Title,
  Description,
  DeadEnd,
  CountDown,
  Section,
  Button
} from './style';


class MinCard extends React.Component {

  async handleDelete(){
    const realm = await getRealm()

    await realm.write(() => {
      const delTask = realm.objectForPrimaryKey('Tasks', this.props.data.id)

      realm.delete(delTask)
    })

    this.render()
  }

  fomatedDeadend(){
    //const deadend = String(this.props.data.deadEnd).substring(8, 18).replace(/ /g, '/')
    let ano = this.props.data.deadEnd.getFullYear()
    let mes = this.props.data.deadEnd.getMonth()
    let dia = this.props.data.deadEnd.getDate()

    return (dia+'/'+mes+'/'+ano)
  }

  render() {
    return (
      <Card>
        <Section>
          <Title>{this.props.data.title}</Title>
          <DeadEnd>{ this.fomatedDeadend() }</DeadEnd>
        </Section>

        <Description numberOfLines={ 3 }>{this.props.data.description}</Description>

        <Section>
          <Button color="#71aac1">
            <Icon name="tool" size={20} color="#000" />
            <Title>Editar</Title>
          </Button>
          <Button color="red" onPress={() => { this.handleDelete() }}>
            <Icon name="delete" size={20} color="#000" />
            <Title>Excluir</Title>
          </Button>
        </Section>
      </Card>
    );
  }
}

export default withNavigation(MinCard)
