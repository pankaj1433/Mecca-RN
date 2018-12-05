import { createStackNavigator } from 'react-navigation';

//Import screens.
import {
    Login
} from '../view/auth';

export default AuthStack = createStackNavigator({ 
    Login: Login
});