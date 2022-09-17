import { StyleSheet, Text, View } from 'react-native';
import { string, shape } from 'prop-types';

export default function CircleBotton(props) {
	const { children, style } = props;
	return (
		<View style={[styles.circleButtom, style]}>
			<Text style={styles.circleButtomLabel}>{children}</Text>
		</View>
	);
}
CircleBotton.propTypes = {
	children: string.isRequired,
	style: shape(),
};

CircleBotton.defaultProps = {
	style: null,
};

const styles = StyleSheet.create({
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
