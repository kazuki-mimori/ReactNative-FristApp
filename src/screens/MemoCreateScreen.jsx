import {
	StyleSheet,
	TextInput,
	View,
	KeyboardAvoidingView,
} from 'react-native';
import AppBer from '../components/AppBer';
import CircleBotton from '../components/CircleBotton';

export default function MemoCreateScreen() {
	return (
		<KeyboardAvoidingView style={styles.container} behavior='height'>
			<AppBer />
			<View style={styles.inputContainer}>
				<TextInput value='' multiline style={styles.input} />
			</View>
			<CircleBotton name='check' style={{ bottom: 30 }} />
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
