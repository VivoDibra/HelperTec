import { createStackNavigator, createAppContainer } from "react-navigation";

import Category from "./components/category/index";
import TaskList from "./components/taskList/index";
import NewTask from "./components/newTask/index";

const AppNavigator = createStackNavigator({
  screen: Category,
  tasks: TaskList,
  newTask: NewTask
});

export default createAppContainer(AppNavigator);
