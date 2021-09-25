import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Jobs from './pages/Jobs';

function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Jobs"
          component={Jobs}
          options={{headerTitleAlign: 'center', headerTintColor: '#ef5350'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
