//put some content
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Splash from '../../templates/Splash';
import Login from '../../templates/Login1';

import LangTest from '../../templates/LangTest';


const AppNavigation = createStackNavigator({
    // Splash: { screen: Splash }
    Login: { screen: Login }
});

const AppNavigator = createAppContainer(AppNavigation);


export default AppNavigator;