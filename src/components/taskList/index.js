import React from 'react';
import { FlatList, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import getRealm from '../../services/realm';

import { Container, Button } from './style';
import Card from '../minCard/index';

class taskList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Tasks: []
    };
  }

  async componentDidMount() {
    const realm = await getRealm();
    const tmp_data = await realm.objects('Tasks').sorted('id', true);

    this.setState({ Tasks: tmp_data });
  }

  render() {
    return (
      <>
        <Container>
          <Button onPress={() => this.props.navigation.navigate('newTask')}>
            <Text>Nova Task!</Text>
          </Button>

          <FlatList
            data={this.state.Tasks}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <Card data={ item } />}
            showsVerticalScrollIndicator={ false }
          />
        </Container>
      </>
    );
  }
}

export default withNavigation(taskList);
