import { View, Text, TextInput, SafeAreaView } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const screen3 = () => {
	return (
		<SafeAreaView
			style={styles.container}
		>
			<Text style = {styles.text}>
				One more thing. Let’s get your medical insurance details — we will use
				this to verify your details.
			</Text>
			<View style={styles.formContainer}>
			<TextInput style={styles.textInput} placeholder="Insurance Company Name*" />
			<TextInput style={styles.textInput} placeholder="Membership Number" />

			<TextInput style={styles.textInput} placeholder="Medical Plan" />
			</View>
			
		</SafeAreaView>
	);
};

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
	},
	formContainer:{
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
export default screen3;
