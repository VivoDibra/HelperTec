import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Image } from 'react-native';

import Logo from './assets/Logo.png';
import Category from './components/category/index';
import TaskList from './components/taskList/index';
import NewTask from './components/newTask/index';

const AppNavigator = createStackNavigator(
  {
    screen: Category,
    tasks: TaskList,
    newTask: NewTask
  },
  {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerTitle: <Image source={Logo} />,
      headerStyle: {
        backgroundColor: 'transparent'
      }
    }
  }
)

export default createAppContainer(AppNavigator);
