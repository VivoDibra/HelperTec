import React from "react";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { withNavigation } from "react-navigation";

import { Container, Box, Desc } from "./style";

class Category extends React.Component {
  render() {
    return (
      <>
        <StatusBar
          backgroundColor="transparent"
          translucent
          barStyle="dark-content"
        />
        <Container>
          <Box onPress={() => this.props.navigation.navigate("tasks")}>
            <Icon name="home" size={34} color="#000" />
            <Desc>Personal</Desc>
          </Box>

          <Box onPress={() => {}}>
            <Icon name="team" size={34} color="#000" />
            <Desc>Job</Desc>
          </Box>

          <Box onPress={() => {}}>
            <Icon name="linechart" size={34} color="#000" />
            <Desc>Academic</Desc>
          </Box>
        </Container>
      </>
    );
  }
}

export default withNavigation(Category);
