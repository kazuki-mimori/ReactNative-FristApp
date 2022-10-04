import {
	StyleSheet,
	TextInput,
	View,
	KeyboardAvoidingView,
	Alert,
} from 'react-native';
import CircleBotton from '../components/CircleBotton';
import { shape, string } from 'prop-types';
import { useState } from 'react';
import firebase from 'firebase';

export default function MemoEditScreen({ navigation, route }) {
	const { id, bodyText } = route.params;
	const [body, setBody] = useState(bodyText);
	const handlePress = () => {
		const { currentUser } = firebase.auth();
		if (currentUser) {
			const db = firebase.firestore();
			const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
			ref
				.set(
					{
						bodyText: body,
						updatedAt: new Date(),
					},
					{ merge: true }
				)
				.then(() => {
					navigation.goBack();
				})
				.catch((error) => {
					Alert.alert(error.code);
				});
		}
	};
	return (
		<KeyboardAvoidingView style={styles.container} behavior='height'>
			<View style={styles.inputContainer}>
				<TextInput
					value={body}
					multiline
					style={styles.input}
					onChangeText={(text) => {
						setBody(text);
					}}
				/>
			</View>
			<CircleBotton name='check' style={{ bottom: 30 }} onPress={handlePress} />
		</KeyboardAvoidingView>
	);
}

MemoEditScreen.prototype = {
	route: shape({
		params: shape({
			id: string,
			bodyText: string,
		}).isRequired,
	}),
};

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
