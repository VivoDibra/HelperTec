import React from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from "react-navigation";

import { Container } from './style';
import Card from '../minCard/index';

class taskList extends React.Component {
  render() {
    return (
      <>
        <Container>
          <TouchableOpacity onPress={ () => this.props.navigation.navigate('newTask') }>
            <Text>Nova Task!</Text>
          </TouchableOpacity>
          <Card title='Terminar app' description='Terminar esse app para servir como TCC alem de me ajudar na minha organização no proximo semestre' deadend='31/12/2019' />
        </Container>
      </>
    );
  }
}

export default withNavigation(taskList);