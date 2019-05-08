//put some content
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../../templates/Login1';
import LangTest from '../../templates/LangTest';


const AppNavigation = createStackNavigator({
    Login: { screen: Login }
});

const AppNavigator = createAppContainer(AppNavigation);


export default AppNavigator;