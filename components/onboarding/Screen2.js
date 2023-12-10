import { SafeAreaView, View, Text, TextInput } from "react-native";
import React from "react";

import { Input } from "@rneui/themed";
import { StyleSheet } from "react-native";

const Screen2 = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.text}>
				Please tell us about yourself so we can get you set up better.
			</Text>

			<View style={styles.formContainer}>
				<TextInput style={styles.textInput} placeholder="Full Name" />
				<TextInput style={styles.textInput} placeholder="Date of Birth" />

				<TextInput style={styles.textInput} placeholder="Email Address" />
				<TextInput style={styles.textInput} placeholder="Phone Number" />
				<TextInput
					style={styles.textInput}
					placeholder="Account Password"
					secureTextEntry
				/>

				<TextInput
					style={styles.textInput}
					placeholder="Confirm Password"
					secureTextEntry
				/>
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

export default Screen2;
