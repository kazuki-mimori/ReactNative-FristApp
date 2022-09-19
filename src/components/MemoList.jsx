import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function MemoList() {
	const navigation = useNavigation();
	return (
		<View>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate('Detail');
				}}
				style={styles.memoListItem}
			>
				<View>
					<Text style={styles.memoListItemTitle}>買い物リスト</Text>
					<Text style={styles.memoListItemRight}>2020年12月24日 10:00</Text>
				</View>
				<TouchableOpacity
					style={styles.memoDelete}
					onPress={() => {
						alert('delete');
					}}
				>
					<Feather name='x' size={16} color='#B0B0B0' />
				</TouchableOpacity>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate('Detail');
				}}
				style={styles.memoListItem}
			>
				<View>
					<Text style={styles.memoListItemTitle}>買い物リスト</Text>
					<Text style={styles.memoListItemRight}>2020年12月24日 10:00</Text>
				</View>
				<TouchableOpacity
					style={styles.memoDelete}
					onPress={() => {
						alert('delete');
					}}
				>
					<Feather name='x' size={16} color='#B0B0B0' />
				</TouchableOpacity>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate('Detail');
				}}
				style={styles.memoListItem}
			>
				<View>
					<Text style={styles.memoListItemTitle}>買い物リスト</Text>
					<Text style={styles.memoListItemRight}>2020年12月24日 10:00</Text>
				</View>
				<TouchableOpacity
					style={styles.memoDelete}
					onPress={() => {
						alert('delete');
					}}
				>
					<Feather name='x' size={16} color='#B0B0B0' />
				</TouchableOpacity>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate('Detail');
				}}
				style={styles.memoListItem}
			>
				<View>
					<Text style={styles.memoListItemTitle}>買い物リスト</Text>
					<Text style={styles.memoListItemRight}>2020年12月24日 10:00</Text>
				</View>
				<TouchableOpacity
					style={styles.memoDelete}
					onPress={() => {
						alert('delete');
					}}
				>
					<Feather name='x' size={16} color='#B0B0B0' />
				</TouchableOpacity>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	memoListItem: {
		backgroundColor: '#ffffff',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 19,
		paddingVertical: 16,
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: 'rgba(0, 0, 0, 0.15)',
	},
	memoListItemTitle: {
		fontSize: 16,
		lineHeight: 32,
	},
	memoListItemRight: {
		fontSize: 12,
		lineHeight: 16,
		color: '#848484',
	},
	memoDelete: {
		padding: 8,
	},
});
