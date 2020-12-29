import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home';
import ListDetail from '../screens/ListDetail';
import {stackStyle} from '../components/config';

const MainNavigation = createStackNavigator(
  {
    ListDetail,
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
