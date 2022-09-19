import { StyleSheet, View } from 'react-native';
import CircleBotton from '../components/CircleBotton';
import MemoList from '../components/MemoList';

export default function MemoListScreens({ navigation }) {
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
