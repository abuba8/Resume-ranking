import React from 'react';

import {View, Text, SafeAreaView} from 'react-native';

import Dashboard from './src/features/dashboard'

export default class App extends React.Component {


  render = () => {
    return (
    // <ReduxProvider store={store}>
      // <NavigatorProvider
      //   style={{flex: 1}}
      //   // ref={nav => {
      //   //   this.navigator = nav;
      //   // }
      //   >
        <SafeAreaView>
          <Dashboard />
        </SafeAreaView>
      // </NavigatorProvider>
    
    // </ReduxProvider>
    )  
  }
}
