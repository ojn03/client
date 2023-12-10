import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import { useWindowDimensions } from "react-native";
import React from "react";

const Screen0 = () => {
	const { width } = useWindowDimensions();

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.text}>
				Welcome to PillPall!{"\n\n"}
				We’re so happy you’re here. Before we proceed, we’d like to introduce
				ourselves and how we’ve got you covered.
			</Text>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "90%",
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center"
		// justifyContent:'center'
	},
	text: {
		fontSize: 22,
		textAlign: "left",
		fontWeight: "300"
	}
});
export default Screen0;
