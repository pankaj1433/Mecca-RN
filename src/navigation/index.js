import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AppTabs from './AppTabs';
import AuthStack from './AuthStack';
import AuthLoadingScreen from './AuthLoadingScreen';

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppTabs,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));