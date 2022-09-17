import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.appber}>
				<View style={styles.appberInner}>
					<Text style={styles.appberTitle}>Memo App</Text>
					<Text style={styles.appberRight}>ログアウト</Text>
				</View>
			</View>

			<View>
				<View style={styles.memoListItem}>
					<View>
						<Text style={styles.memoListItemTitle}>買い物リスト</Text>
						<Text style={styles.memoListItemRight}>2020年12月24日 10:00</Text>
					</View>
					<View>
						<Text>X</Text>
					</View>
				</View>
				<View style={styles.memoListItem}>
					<View>
						<Text style={styles.memoListItemTitle}>買い物リスト</Text>
						<Text style={styles.memoListItemRight}>2020年12月24日 10:00</Text>
					</View>
					<View>
						<Text>X</Text>
					</View>
				</View>
				<View style={styles.memoListItem}>
					<View>
						<Text style={styles.memoListItemTitle}>買い物リスト</Text>
						<Text style={styles.memoListItemRight}>2020年12月24日 10:00</Text>
					</View>
					<View>
						<Text>X</Text>
					</View>
				</View>
			</View>

			<View style={styles.circleButtom}>
				<Text style={styles.circleButtomLabel}>+</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F0F4F8',
	},
	appber: {
		width: '100%',
		height: 104,
		backgroundColor: '#467FD3',
		justifyContent: 'flex-end',
	},
	appberInner: {
		alignItems: 'center',
	},
	appberTitle: {
		marginBottom: 8,
		fontSize: 22,
		lineHeight: 32,
		color: '#ffffff',
		fontWeight: 'bold',
	},
	appberRight: {
		position: 'absolute',
		right: 19,
		bottom: 14,
		color: 'rgba(255, 255, 255, 0.8)',
	},
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
	circleButtom: {
		backgroundColor: '#467FD3',
		width: 64,
		height: 64,
		borderRadius: 32,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		right: 40,
		bottom: 40,
		shadowColor: '#000000',
		shadowOffset: { width: 0, height: 8 },
		shadowOpacity: 0.25,
		shadowRadius: 8,
		elwvation: 8,
	},
	circleButtomLabel: {
		color: '#ffffff',
		fontSize: 40,
		lineHeight: 40,
	},
});
