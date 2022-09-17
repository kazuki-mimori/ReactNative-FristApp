import { StyleSheet, View } from 'react-native';
import AppBer from '../components/AppBer';
import CircleBotton from '../components/CircleBotton';
import MemoList from '../components/MemoList';

export default function MemoListScreens() {
	return (
		<View style={styles.container}>
			<AppBer />
			<MemoList />
			<CircleBotton>+</CircleBotton>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F0F4F8',
	},
});
