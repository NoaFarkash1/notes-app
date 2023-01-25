import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import Header from './Components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Note from './Screens/Note';
import Category from './Screens/Category';
import NoteContextProvider from './Data/NoteData';


const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <View style={styles.container}>
<Header/>
<NoteContextProvider>
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen name="Home" component={Home} />
<Stack.Screen name="Category" component={Category} />
<Stack.Screen name="Note" component={Note} />
</Stack.Navigator>
</NavigationContainer>
</NoteContextProvider>

   <StatusBar style="auto" />
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
