/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import ParentNavigation from './src/navigations/ParentNavigation/ParentNavigation';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView
        style={{
          backgroundColor: Colors.lighter,
          flex: 1,
        }}>
        <StatusBar barStyle={'dark-content'} backgroundColor={Colors.lighter} />
        <ParentNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
