import { NavigationContainer } from '@react-navigation/native';

import {
	createNativeStackNavigator,
	// CardStyleInterpolators,
} from '@react-navigation/native-stack';
import firebase from 'firebase/app';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoListScreens from './src/screens/MemoListScreens';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LogoutScreen from './src/screens/LogoutScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import LoginScreen from './src/screens/LoginScreen';
import {firebaseConfig} from './env';

require('firebase/firestore');

const Stack = createNativeStackNavigator();

if (firebase.apps.length === 0) {
	firebase.initializeApp(firebaseConfig);
}
export default function App() {
	return (
		<>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName='Login'
					screenOptions={{
						headerStyle: { backgroundColor: '#467FD3' },
						headerTitleStyle: { color: '#fff' },
						headerTitle: 'Memo App',
						headerTintColor: '#ffffff',
						headerBackTitle: 'Back',
						gestureEnabled: true,
						gestureDirection: 'horizontal',
						// cardStyleInterpolator: CardStyleInterpolators.forHorzontalIOS,
					}}
				>
					<Stack.Screen name='Home' component={MemoListScreens} />
					<Stack.Screen name='Create' component={MemoCreateScreen} />
					<Stack.Screen name='Edit' component={MemoEditScreen} />
					<Stack.Screen name='Detail' component={MemoDetailScreen} />
					<Stack.Screen
						name='Logout'
						component={LogoutScreen}
						// options={{
						// 	cardStyleInterpolators:
						// 		CardStyleInterpolators.forFadeFromBottomAndroid,
						// }}
					/>
					<Stack.Screen name='Login' component={LoginScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
