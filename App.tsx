//App.tsx
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './WelcomeScreen';
import HomeScreen from './HomeScreen';
import AddMenuScreen from './AddMenuScreen';
import FilterScreen from './FilterScreen';
import PaymentScreen from './PaymentScreen';
import { MenuProvider } from './MenuContext';

type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  AddMenu: undefined;
  Filter: undefined;
  Payment: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddMenu" component={AddMenuScreen} />
          <Stack.Screen name="Filter" component={FilterScreen} />
          <Stack.Screen name="Payment" component={PaymentScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
};

export default App;
