import {
	StyleSheet,
	TextInput,
	View,
	KeyboardAvoidingView,
} from 'react-native';
import CircleBotton from '../components/CircleBotton';
import firebase from 'firebase';

export default function MemoCreateScreen({ navigation }) {
	const handlePress = () => {
		const db = firebase.firestore();
		const ref = db.collection('memos');
		ref.add({
			bodyText: 'Hello',
		})
		.then((docRef) => {
			console.log('Created!', docRef.id);
			navigation.goBack();
		})
		.catch((error) => {
			console.log('Error!', error);
		});
	}
	return (
		<KeyboardAvoidingView style={styles.container} behavior='height'>
			<View style={styles.inputContainer}>
				<TextInput value='' multiline style={styles.input} />
			</View>
			<CircleBotton
				onPress={handlePress}
				name='check'
				style={{ bottom: 30 }}
			/>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	inputContainer: {
		paddingHorizontal: 27,
		paddingVertical: 32,
		flex: 1,
	},
	input: {
		flex: 1,
		textAlignVertical: 'top',
		fontSize: 16,
		lineHeight: 24,
	},
});
