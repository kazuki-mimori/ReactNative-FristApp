import { StyleSheet, Text, View } from 'react-native';
import { string } from 'prop-types';
export default function SubmitButton(props) {
	const { label } = props;
	return (
		<View style={styles.ButtonContainer}>
			<Text style={styles.ButtonLable}>{label}</Text>
		</View>
	);
}
SubmitButton.propTypes = {
	label: string.isRequired,
};

const styles = StyleSheet.create({
	ButtonContainer: {
		backgroundColor: '#467FD3',
		borderRadius: 4,
		alignSelf: 'flex-start',
		marginBottom: 24,
	},
	ButtonLable: {
		fontSize1: 16,
		lineHeight: 32,
		paddingVertical: 8,
		paddingHorizontal: 32,
		color: '#fff',
	},
});
