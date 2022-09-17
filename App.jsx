import { StyleSheet, View } from 'react-native';
import AppBer from './src/components/AppBer';
import CircleBotton from './src/components/CircleBotton';
import MemoList from './src/components/MemoList';

export default function App() {
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
