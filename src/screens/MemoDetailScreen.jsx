import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CircleBotton from '../components/CircleBotton';

export default function MemoDetailScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.MemoHeader}>
				<Text style={styles.MemoTitle}>買い物リスト物</Text>
				<Text style={styles.MemoDate}>2020年12月24日 10:00</Text>
			</View>
			<ScrollView style={styles.MemoBody}>
				<Text style={styles.MemoText}>
					買い物リスト 書体やレイアウトなどを確認するために、
				</Text>
			</ScrollView>
			<CircleBotton
				onPress={() => navigation.navigate('Edit')}
				name='edit'
				style={{ top: 60, bottom: 'aute' }}
			/>
		</View>
	);
}

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
