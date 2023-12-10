import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function ScreenFin() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>
				Congratulations!{"\n\n"}

				Your account has successfully been created.{"\n\n"}

				Click the arrow below to get to the dashboard to complete your
				prescription data and to connect with your support network and
				physician.
			</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		width: "90%",
		flex: 1
		// backgroundColor: "#fff",
		// alignItems: "center"
	},
	text: {
		fontSize: 22,
		textAlign: "left",
		fontWeight: "300"
	}
});
