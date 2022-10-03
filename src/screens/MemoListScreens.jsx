import { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import CircleBotton from '../components/CircleBotton';
import LogoutButton from '../components/LogoutButton';
import MemoList from '../components/MemoList';
import firebase from 'firebase';

export default function MemoListScreens({ navigation }) {
	const [memos, setMemos] = useState([]);
	useEffect(() => {
		navigation.setOptions({
			headerRight: () => <LogoutButton />,
		});
	}, []);

	useEffect(() => {
		const db = firebase.firestore();
		const { currentUser } = firebase.auth();
		let unsubscribe = () => {};
		if (currentUser) {
			const ref = db
				.collection(`users/${currentUser.uid}/memos`)
				.orderBy('updatedAt', 'desc');
			unsubscribe = ref.onSnapshot(
				(snapshot) => {
					const userMemos = [];
					snapshot.forEach((doc) => {
						console.log(doc.id, doc.data());
						const data = doc.data();
						userMemos.push({
							id: doc.id,
							bodyText: data.bodyText,
							updatedAt: data.updatedAt.toDate(),
						});
					});
					setMemos(userMemos);
				},
				(error) => {
					console.log(error);
					Alert.alert('データの読み込みに失敗しました');
				}
			);
		}
		return unsubscribe;
	}, []);

	return (
		<View style={styles.container}>
			<MemoList memos={memos} />
			<CircleBotton
				name='plus'
				onPress={() => navigation.navigate('Create')}
			></CircleBotton>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F0F4F8',
	},
});
