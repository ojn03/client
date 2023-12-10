import { View, Text, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

export default function Screen4() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>
				Create a medical support network of caregivers to aid in your recovery.
			</Text>

			<View
				style={styles.imageContainer}
			>
				<Image
					style={styles.imageStyle}
					source={require("../../assets/DoctorIcon.png")}
				/>
				<Image
					style={styles.imageStyle}
					source={require("../../assets/CaregiverIcon.png")}
				/>
				<Image
					style={styles.imageStyle}
					source={require("../../assets/FamilyIcon.png")}
				/>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	imageStyle: {
		resizeMode: "contain",
		width: 100,
		flex: 1,
		flexDirection: "row"
	},
	imageContainer: {
		flexDirection: "row",
		gap: 10,
		justifyContent: "space-evenly",
		width: "100%"
	},
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
	},
	formContainer: {
		marginTop: 20
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#466DA1",
		borderRadius: 10,
		padding: 10,
		marginVertical: 10
	}
});
