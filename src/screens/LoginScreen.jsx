import { StyleSheet, Text, TextInput, View } from 'react-native';
import AppBer from '../components/AppBer';
import SubmitButton from '../components/SubmitButton';

export default function LoginScreen() {
	return (
		<View style={styles.container}>
			<AppBer />
			<View style={styles.inner}>
				<Text style={styles.title}>Login</Text>
				<TextInput value='Email Address' style={styles.input} />
				<TextInput value='Password' style={styles.input} />
				<SubmitButton label='Submit' />
				<View style={styles.footer}>
					<Text style={styles.footerText}>Not registered</Text>
					<Text style={styles.footerLink}>sign up here!</Text>
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
