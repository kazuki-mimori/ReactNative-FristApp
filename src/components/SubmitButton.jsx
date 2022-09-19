import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { string } from 'prop-types';
export default function SubmitButton(props) {
	const { label, onPress } = props;
	return (
		<TouchableOpacity onPress={onPress} style={styles.ButtonContainer}>
			<Text style={styles.ButtonLable} on>
				{label}
			</Text>
		</TouchableOpacity>
	);
}
SubmitButton.propTypes = {
	label: string.isRequired,
	onPress: string.isRequired,
};
SubmitButton.defaultProps = {
	onPress: null,
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
