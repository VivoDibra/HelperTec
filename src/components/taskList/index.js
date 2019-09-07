import React from "react";
import { StatusBar, FlatList, Text } from "react-native";

import { Container } from "./style";

export default class taskList extends React.Component {
  render() {
    return (
      <>
        <StatusBar
          backgroundColor="transparent"
          translucent
          barStyle="dark-content"
        />
        <Container>
          <Text>FlatList vai aqui!</Text>
        </Container>
      </>
    );
  }
}
