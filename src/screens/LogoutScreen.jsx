import { useState } from 'react';
import {
	Alert,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import SubmitButton from '../components/SubmitButton';
import firebase from 'firebase';

export default function LogoutScreen({ navigation }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handlePress = () => {
		firebase.auth().createUserWithEmailAndPassword(email, password)
		.then((userCredential) => {
			const {user} = userCredential;
			console.log(user.uid);
			navigation.reset({
				index: 0,
				routes: [{ name: 'Home' }],
			});
		})
		.catch((error) => {
			console.log(error.code,error.message)
		 	Alert.alert(error.code);
		});
	};
	
	return (
		<View style={styles.container}>
			<View style={styles.inner}>
				<Text style={styles.title}>Logout</Text>
				<TextInput
					style={styles.input}
					value={email}
					onChangeText={(text) => {
						setEmail(text);
					}}
					autoCapitalize='none'
					keyboardType='email-address'
					placeholder='Email Address'
					textContentType='emailAddress'
				/>
				<TextInput
					style={styles.input}
					value={password}
					onChangeText={(text) => {
						setPassword(text);
					}}
					autoCapitalize='none'
					secureTextEntry
					placeholder='Password'
					textContentType='Password'
				/>
				<SubmitButton
					label='Submit'
					onPress={handlePress}
				/>
				<View style={styles.footer}>
					<Text style={styles.footerText}>Already registered?</Text>
					<TouchableOpacity
						onPress={() => {
							navigation.reset({
								index: 0,
								routes: [{ name: 'Login' }],
							});
						}}
					>
						<Text style={styles.footerLink}>Login.</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F0F4F8',
	},
	inner: {
		paddingHorizontal: 27,
		paddingVertical: 24,
	},
	title: {
		fontSize: 24,
		lineHeight: 32,
		fontWeight: 'bold',
		marginBottom: 24,
	},
	input: {
		fontSize: 16,
		height: 48,
		backgroundColor: '#fff',
		borderColor: '#ddd',
		borderWidth: 1,
		borderRadius: 4,
		paddingHorizontal: 8,
		marginBottom: 16,
	},

	footer: {
		flexDirection: 'row',
	},
	footerText: {
		fontSize: 14,
		lineHeight: 24,
		marginRight: 8,
	},
	footerLink: {
		fontSize: 14,
		lineHeight: 24,
		color: '#467FD3',
	},
});
