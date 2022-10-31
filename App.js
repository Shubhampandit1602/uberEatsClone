import * as React from "react";
import RootNavigation from './navigation';
import { LogBox } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';



export default function App() {
  return <RootNavigation/>;
}
// LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from @react-native-async-storage/async-storage instead of react-native.']);


