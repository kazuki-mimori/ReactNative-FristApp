import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import CircleBotton from '../components/CircleBotton';
import LogoutButton from '../components/LogoutButton';
import MemoList from '../components/MemoList';

export default function MemoListScreens({ navigation }) {
	useEffect(() => {
		navigation.setOptions({
			headerRight: () => <LogoutButton />,
		});
	},[]);
	return (
		<View style={styles.container}>
			<MemoList />
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
