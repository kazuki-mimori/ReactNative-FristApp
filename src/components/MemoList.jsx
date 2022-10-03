import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { shape, string, instanceOf, arrayOf } from 'prop-types';

export default function MemoList(props) {
	const { memos } = props;
	const navigation = useNavigation();
	function renderItem({ item }) {
		return (
			<TouchableOpacity
				onPress={() => {
					navigation.navigate('Detail');
				}}
				style={styles.memoListItem}
				key={item.id}
			>
				<View>
					<Text style={styles.memoListItemTitle} numberOfLines={1}>
						{item.bodyText}
					</Text>
					<Text style={styles.memoListItemRight}>{String(item.updatedAt)}</Text>
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
		);
	}
	return (
		<View>
			<FlatList
				data={memos}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
}

MemoList.propTypes = {
	memos: arrayOf(
		shape({
			id: string,
			bodyText: string,
			updatedAt: instanceOf(Date),
		}).isRequired
	),
};

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
