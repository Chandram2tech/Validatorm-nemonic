/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {ApiPromise, WsProvider} from '@polkadot/api';
import ValidatorSelector from './ValidatorSelector';
import {Keyring} from '@polkadot/api';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const checkValidtor = async () => {
    // Create a keyring instance
    debugger;

    const keyring = new Keyring({type: ''});
debugger;
    // Some mnemonic phrase
    const PHASE1 = '';

    // Add an account, straight mnemonic
    const newPair = keyring.addFromUri(PHASE1);

    // (Advanced) add an account with a derivation path (hard & soft)
    // const  alice = keyring.addFromUri(`${PHRASE}//hard-derived/soft-derived`);

    try {
      const api = await ApiPromise.create({
        provider: new WsProvider('provider url'),
      });
      console.log(`${api}`);
      const selector = new ValidatorSelector(api);
      console.log(`${api}`);

      const fata = await selector.getUserValidatorsMeetCriteria(
        newPair.address,
      );
      console.log(`${api}`);
    } catch (error) {
      const yerro = error;
      console.log(`${error}`);
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Button
          onPress={checkValidtor}
          title="Test mnemonic"
          color="#841584"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
