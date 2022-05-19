import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import colors from "../config/colors";

import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const screens = {
  Welcome: {
    screen: WelcomeScreen,
    headerMode: "none",
    navigationOptions: {
      header: null,
    },
  },
  Home: {
    screen: HomeScreen,
    headerMode: "none",
    navigationOptions: {
      header: null,
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: colors.BloodRed, height: 0,},
    headerTitleStyle: {fontWeight: "bold",color:"white"},
  },
});

export default createAppContainer(HomeStack);
