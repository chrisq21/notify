/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Session, Reference} from './src/screens';

const Stack = createStackNavigator();
export const SessionContext = React.createContext(null);

const App = () => {
  const [session, setSession] = useState(null);
  const createSession = (newSession: object) => {
    setSession(newSession);
  };

  const deleteSession = () => {
    setSession(null);
  };

  return (
    <SessionContext.Provider value={{session, createSession, deleteSession}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {elevation: 0, backgroundColor: 'rgb(32, 24, 40)'},
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
            cardStyle: {backgroundColor: 'rgb(32, 24, 40)'},
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Session" component={Session} />
          <Stack.Screen name="Reference" component={Reference} />
        </Stack.Navigator>
      </NavigationContainer>
    </SessionContext.Provider>
  );
};

export default App;
