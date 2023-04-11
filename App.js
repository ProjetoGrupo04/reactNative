import { StyleSheet, Text, View, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar
          backgroundColor="#004587"
          barStyle="light-content"//light-content
          translucent={false}
          animated={true}
          networkActivityIndicatorVisible={true}
        />
        <Routes />
      </NavigationContainer>
  );
}

/*
  --laranja-senac: #f8922c;
  --azul-senac: #00315a;
  --azul-claro-senac: #004587;
  --fundo: #1e1d2e
  --green-900: #3fffa3;
  --red-900: #FF3F4B;
*/
