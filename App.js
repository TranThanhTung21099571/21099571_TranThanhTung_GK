import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image, StyleSheet, Text, View } from 'react-native';
import Screen01 from './screens/Screen01';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ f }) => {
          let source;
          if (route.name === 'A')
            source = require('./assets/image/anh09.png');
          else if (route.name === 'B')
            source = require('./assets/image/anh10.png');
          else if (route.name === 'C')
            source = require('./assets/image/anh11.png');
          else if (route.name === 'D')
            source = require('./assets/image/anh12.png');
          else if (route.name === 'E')
            source = require('./assets/image/anh13.png');
          else if (route.name === 'F')
            source = require('./assets/image/anh14.png');
          return (
            <Image style={{ height: 35, width: 35, }} source={source}></Image>
          );
        },
        tabBarStyle: {
          backgroundColor: 'white',
          height: '15%',
          padding: 20,
        }
      })}>
        <Tab.Screen name='A' component={Screen01} options={{ title: 'Home' }}></Tab.Screen>
        <Tab.Screen name='B' component={Screen01} options={{ title: 'Explore' }}></Tab.Screen>
        <Tab.Screen name='C' component={Screen01} options={{ title: 'MyCart' }}></Tab.Screen>
        <Tab.Screen name='D' component={Screen01} options={{ title: 'Hospital' }}></Tab.Screen>
        <Tab.Screen name='E' component={Screen01} options={{ title: 'Support' }}></Tab.Screen>
        <Tab.Screen name='F' component={Screen01} options={{ title: 'Profile' }}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
