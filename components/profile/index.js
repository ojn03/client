import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Prescriptions from "./prescriptions";
import Tablayouts from "../tablayouts";
import React from "react";

function Header() {
	return (
		<View style={styles.headerContainer}>
			<Text style={styles.headerText}>Your Profile</Text>
		</View>
	);
}

function Children() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "flex-start",
				alignItems: "center",
				backgroundColor: "#EAEAEA",
				width: "100%"
			}}
		>
			<Image
				style={{
					resizeMode: "contain",
					maxWidth: "90%",
					// flex: 0
					height: 250
				}}
				source={require("../../assets/PatientInformation.png")}
			/>

			<Image
				style={{
					resizeMode: "contain",
					width: "90%",

					height: 500
				}}
				source={require("../../assets/YourPillPals.png")}
			/>
			<Prescriptions />
		</View>
	);
}

export default function Profile() {
	return <Tablayouts header={<Header />} children={<Children />} />;
}

const styles = StyleSheet.create({
	headerContainer: {
		width: "90%",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start"
	},
	headerText: {
		fontSize: 40,
		fontWeight: "500",
		// alignSelf: "center",
		color: "#000"
	}
});
