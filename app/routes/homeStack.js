import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import colors from "../config/colors";

import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import UniqueHelmsScreen from "../screens/UniqueHelmsScreen";
import UniquesScreen from "../screens/UniquesScreen";
import SetsScreen from "../screens/SetsScreen";
import RunewordsScreen from "../screens/RunewordsScreen"

const screens = {
  Welcome: {
    screen: WelcomeScreen,
    headerMode: "none",
    navigationOptions: {
      headerShown: false,
    },
  },
  Home: {
    screen: HomeScreen,
    headerMode: "none",
    navigationOptions: {
      headerShown: false,
    },
  },
  Uniques: {
    screen: UniquesScreen,
    headerMode: "none",
    navigationOptions: {
      headerShown: false,
    },
  },
  Sets: {
    screen: SetsScreen,
    headerMode: "none",
    navigationOptions: {
      headerShown: false,
    },
  },
  Runewords: {
    screen: RunewordsScreen,
    headerMode: "none",
    navigationOptions: {
      headerShown: false,
    },
  },
  UniqueHelms: {
    screen: UniqueHelmsScreen,
    headerMode: "none",
    navigationOptions: {
      headerShown: false,
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
