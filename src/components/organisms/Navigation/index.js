//put some content
import {createStackNavigator} from 'react-navigation';
import Login from '../../templates/Login';

const AppNavigation = createStackNavigator({
    Login: { screen: Login },
});
export default AppNavigation;