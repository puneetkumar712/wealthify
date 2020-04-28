/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Graph from './components/graph';

const App = () => {
  const [initialInvestment, setInitialInvestment] = useState(45000);
  return (
    <>
      <View style={styles.appContainer}>
        <Graph/>
        <View style={styles.inputContainer}>
          <View style={styles.forecastInputContainer}>
            <Text style={{fontSize: 22}}>Initial Investment</Text>
            <View>
              <Text style={styles.inputDisplay}>£{initialInvestment}</Text>
            </View>
          </View>
        </View>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  inputContainer: {
    height: '40%',
  },
  forecastInputContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 10
  },
  inputDisplay: {
    color: '#0162FF',
    fontSize: 28
  }
});

export default App;
