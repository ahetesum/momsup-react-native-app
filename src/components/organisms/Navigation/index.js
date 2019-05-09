//put some content
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Splash from '../../templates/Splash';
import Login from '../../templates/Login1';
import Home from '../../templates/Home';

import LangTest from '../../templates/LangTest';
import LangTest1 from '../../templates/LangTest1';

const AppNavigation = createStackNavigator({
    Login: { screen: Login },
    Home: { screen: Home },
    LangTest: { screen: LangTest },
    LangTest1: { screen: LangTest1 },
});

const AppNavigator = createAppContainer(AppNavigation);


export default AppNavigator;