//put some content
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Splash from '../../templates/Splash';
import Login from '../../templates/Login1';
import Home from '../../templates/Home';

import LangTest from '../../templates/LangTest';


const AppNavigation = createStackNavigator({
    // Splash: { screen: Splash }
    Login: { screen: Login },
    Home: { screen: Home },
});

const AppNavigator = createAppContainer(AppNavigation);


export default AppNavigator;