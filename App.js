import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './screens/Home';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import SignInScreen from './screens/SignInScreen';
import {Provider} from 'react-redux';
import rootReducer from './reducers';

const AppStack = createStackNavigator ({Home: HomeScreen});
const AuthStack = createStackNavigator ({SignIn: SignInScreen});

const AppContainer = createAppContainer (
  createSwitchNavigator (
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);
export default class App extends React.Component {
  render () {
    return (
      <Provider store={rootReducer}>
        <AppContainer />
      </Provider>
    );
  }
}
