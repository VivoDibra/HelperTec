import React from "react";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/AntDesign";

import { Container, Text, Input, Group } from "./style";

class newTask extends React.Component {
  render() {
    return (
      <Container>
        <Text>Nova Tarefa</Text>
        <Group>
          <Input
            placeholder="Titulo da Task"
            autoCapitalize="sentences"
            autoCorrect={false}
            placeholderTextColor="#333"
          />
          <Icon name="" size={20} color="#000" />
        </Group>
      </Container>
    );
  }
}

export default withNavigation(newTask);
