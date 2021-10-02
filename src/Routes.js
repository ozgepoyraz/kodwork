import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Jobs from './pages/Jobs';
import Details from './pages/Details';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavoritedJobs from './pages/FavoritedJobs';

function App() {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  const jobsStack = () => {
    return (
      <Stack.Navigator initialRouteName="Jobs">
        <Stack.Screen
          name="Jobs"
          component={Jobs}
          options={{headerTitleAlign: 'center', headerTintColor: '#ef5350'}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({route}) => ({
            headerTitleAlign: 'center',
            headerTintColor: '#ef5350',
            title: route.params.item.name,
            headerTitleAlign: 'center',
          })}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Jobs"
          component={jobsStack}
          options={{
            headerShown: false,
            drawerActiveBackgroundColor: '#fdeaea',
            drawerActiveTintColor: '#ef5552',
            drawerInactiveBackgroundColor: 'white',
            drawerInactiveTintColor: '#6c6c6d',
          }}
        />
        <Drawer.Screen
          name="Favorited Jobs"
          component={FavoritedJobs}
          options={{
            headerTitleAlign: 'center',
            headerTintColor: '#ef5350',
            drawerActiveBackgroundColor: '#fdeaea',
            drawerActiveTintColor: '#ef5552',
            drawerInactiveBackgroundColor: 'white',
            drawerInactiveTintColor: '#6c6c6d',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;
