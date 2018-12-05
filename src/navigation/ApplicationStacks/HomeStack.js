import { createStackNavigator } from 'react-navigation';
import {tabStackConfig} from '../../common/navigationConfig';

//Import screens.
import {
    Home
} from '../../view/app';

export default HomeStack = createStackNavigator({
    Home: Home,
},tabStackConfig());