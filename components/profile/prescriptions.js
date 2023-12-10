import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Prescriptions() {
	return (
		<View style={styles.container}>
			<View style={{ flexDirection: "row" }}>
				<Text style={styles.titleText}>Prescriptions</Text>
				<TouchableOpacity
					style={{
						alignSelf: "center",
						height: 20,
						width: 20,
						borderColor: "#AAA",
						borderWidth: 1,
						marginLeft: "auto",
						justifyContent: "center",
						alignItems: "center",
						borderRadius: 10
					}}
				>
					<Text style={{ color: "#AAA" }}>+</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const shadowProp = StyleSheet.create({
	shadowProp: {
		shadowColor: "#171717",
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.3,
		shadowRadius: 4
	}
});

const styles = StyleSheet.create({
	container: {
		padding: 10,
		width: "90%",
		backgroundColor: "white",
		borderRadius: 15,
		...shadowProp.shadowProp
	},
	titleText: {
		fontSize: 30,
		fontWeight: "600",
		color: "#ED712E"
	}
});
