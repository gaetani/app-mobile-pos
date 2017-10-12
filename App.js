
import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import LoginPage from './src/scenes/login';
import { DrawerNavigator } from 'react-navigation';

import SideMenu from './src/scenes/SideMenu';

const Router = DrawerNavigator({
  login: { screen: LoginPage }
 },
 {
  contentComponent: props => <SideMenu {...props} />,
  initialRouteName: 'login',
 });

const RouterWithRedux = connect()(Router);
import reducers from './src/reducers';
// other imports...

// create store...
const middleware = [/* ...your middleware (i.e. thunk) */];
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers);

export default class App extends Component {

  render () {
    return (
      <Provider store={store}>
        <RouterWithRedux/>
      </Provider>
    );
  }
}