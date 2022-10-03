import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CircleBotton from '../components/CircleBotton';
import { shape } from 'prop-types';
import { useEffect, useState } from 'react';
import firebase from 'firebase';
import { doc } from 'prettier';
import { moveSyntheticComments } from 'typescript';
import { dateToString } from '../utils';

export default function MemoDetailScreen({ navigation, route }) {
	const { id } = route.params;
	const [memo, setMemo] = useState(null);
	useEffect(() => {
		const { currentUser } = firebase.auth();
		let unsubscribe = () => {};
		if (currentUser) {
			const db = firebase.firestore();
			const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
			unsubscribe = ref.onSnapshot((doc) => {
				const data = doc.data();
				setMemo({
					id: doc.id,
					bodyText: data.bodyText,
					updatedAt: data.updatedAt.toDate(),
				});
			});
		}
		return unsubscribe;
	}, []);
	return (
		<View style={styles.container}>
			<View style={styles.MemoHeader}>
				<Text style={styles.MemoTitle} numberOfLines={1}>
					{memo && memo.bodyText}
				</Text>
				<Text style={styles.MemoDate}>
					{memo && dateToString(memo.updatedAt)}
				</Text>
			</View>
			<ScrollView style={styles.MemoBody}>
				<Text style={styles.MemoText}>{memo && memo.bodyText}</Text>
			</ScrollView>
			<CircleBotton
				onPress={() => navigation.navigate('Edit')}
				name='edit'
				style={{ top: 60 }}
			/>
		</View>
	);
}

MemoDetailScreen.prototype = {
	route: shape({
		params: shape({
			id: String,
		}).isRequired,
	}),
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
	},
	MemoHeader: {
		backgroundColor: '#467fd3',
		height: 96,
		justifyContent: 'center',
		paddingVertical: 24,
		paddingHorizontal: 19,
	},
	MemoTitle: {
		color: '#ffffff',
		fontSize: 20,
		lineHeight: 32,
		fontWeight: 'bold',
	},
	MemoDate: {
		color: '#ffffff',
		fontSize: 12,
		lineHeight: 16,
	},
	MemoBody: {
		paddingVertical: 32,
		paddingHorizontal: 27,
	},
	MemoText: {
		fontSize: 16,
		lineHeight: 24,
	},
});
