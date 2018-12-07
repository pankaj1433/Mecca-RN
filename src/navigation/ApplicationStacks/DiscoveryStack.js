import { createStackNavigator } from 'react-navigation';
import {tabStackConfig} from '../../common/navigationConfig';

//Import screens.
import {
    Discovery,
    SearchResult,
    UserDetail
} from '../../view/app';

export default DiscoveryStack = createStackNavigator({
    // Discovery: Discovery,
    // SearchResult: SearchResult,
    UserDetail: UserDetail
},tabStackConfig());