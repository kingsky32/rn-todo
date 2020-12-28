import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home';
import {stackStyles} from './config';

const MainNavigation = createStackNavigator(
  {
    Home: Home,
  },
  {
    defaultNavigationOptions: {
      cardStyle: {
        ...stackStyles,
      },
    },
  },
);

export default createAppContainer(MainNavigation);
