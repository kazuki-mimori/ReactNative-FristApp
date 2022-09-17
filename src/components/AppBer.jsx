import { StyleSheet, Text, View } from 'react-native';

export default function AppBer() {
	return (
		<View style={styles.appber}>
			<View style={styles.appberInner}>
				<Text style={styles.appberTitle}>Memo App</Text>
				<Text style={styles.appberRight}>ログアウト</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
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
});
