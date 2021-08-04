// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PersonalInfo from "./features/profile/personalInfo/personalInfo"
import EditProfile from './features/profile/personalInfo/editPersonalInfo';

//routing attempt --need to delete
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Personal Info"
        onPress={() => navigation.navigate('PersonalInfo')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }}/>
        <Stack.Screen name="Details" component={DetailsScreen}  options={{ title: 'Overview' }}/>
        <Stack.Screen name="PersonalInfo" component={PersonalInfo}  options={{ title: 'Personal Info' }}/>
        <Stack.Screen name="EditPersonalInfo" component={EditProfile}  options={{ title: 'Edit Personal Info' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;