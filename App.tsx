import 'react-native-gesture-handler';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './components/app-navigator';

const App = () => {

  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  )
}

export default App;