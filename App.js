import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PaginaUm from './screens/PaginaUm';
import PaginaDois from './screens/PaginaDois';
import PaginaTres from './screens/PaginaTres';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="PaginaUm"
          component={PaginaUm}
          options={{
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#26201B',
            },
            headerTitleStyle: {
              color: 'white', },
          }}
        />
        <Stack.Screen
          name="PaginaDois"
          component={PaginaDois}
          options={{
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#26201B',
            },
            headerTitleStyle: {
              color: 'white', },
          }}
        />
        <Stack.Screen
          name="PaginaTres"
          component={PaginaTres}
          options={{
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#26201B',
            },
            headerTitleStyle: {
              color: 'white', },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
