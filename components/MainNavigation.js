import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home';
import {stackStyle} from './config';

const MainNavigation = createStackNavigator(
  {
    Home,
  },
  {
    defaultNavigationOptions: {
      cardStyle: {
        ...stackStyle,
      },
    },
  },
);

export default createAppContainer(MainNavigation);
