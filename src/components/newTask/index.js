import React from 'react';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import connect2Realm from '../../services/realm'

import { Container, Text, Input, Group, Button, TextBox } from './style';

class newTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Task: {}, //Este estado será armazenado no Realm, os subsequentes apenas guardarao os inputs temporariamente

      title: '',
      description: '',
      deadEnd: '',
      isPersistent: false,
      isOpenned: true,
      type: ''
    };

    this.newTask = this.newTask.bind(this);
  }

  persistTask(Task) {
    const realm = connect2Realm();

    realm.write(() => {
      realm.create('TaskSchema', Task)
    })
  }

  newTask() {
    this.setState({
      Task: {
        //Os dados do formulario vão aqui
        title: this.state.title,
        description: this.state.description,
        deadEnd: this.state.deadEnd,
        isPersistent: this.state.isPersistent,
        isOpenned: this.state.isOpenned,
        type: this.state.type
      }
    });

    //this.persistTask(this.state.Task)
  }

  render() {
    return (
      <Container>
        <Text>Nova Tarefa</Text>
        <Group>
          <Input
            value={ this.state.title }
            placeholder="Titulo da Task"
            autoCapitalize="sentences"
            autoCorrect={false}
            placeholderTextColor="#CCC"
            onChangeText={text => this.setState({ title: text })}
          />
          <Button
            onPress={() => {
              this.newTask();
            }}
          >
            <Icon name="plus" size={20} color="#000" />
          </Button>
        </Group>
        <Group>
          <TextBox
            value={ this.state.description }
            placeholder="Insira uma breve descrição sobre a Task"
            placeholderTextColor="#CCC"
            onChangeText={text => this.setState({ description: text })}
          />
        </Group>
      </Container>
    );
  }
}

export default withNavigation(newTask);
