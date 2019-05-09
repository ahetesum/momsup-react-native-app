//put some content
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Login from '../../templates/Login1';
import LangTest from '../../templates/LangTest';
import LangTest1 from '../../templates/LangTest1';

const AppNavigation = createStackNavigator({
    LangTest:{screen: LangTest},
    LangTest1:{screen: LangTest1}

});

const AppNavigator = createAppContainer(AppNavigation);


export default AppNavigator;