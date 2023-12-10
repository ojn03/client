import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";

const Screen1 = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.text}>
				Let’s begin your registration.{"\n\n"}First, please let us know which
				role fits you best to start off your onboarding process
			</Text>
			<View style={styles.buttonContainer}>
				<MyButton text="Patient" />
				<MyButton text="Family" />
				<MyButton text="Caregiver" />
			</View>
		</SafeAreaView>
	);
};

const MyButton = ({ text }) => {
	return (
		<Button
			title={text}
			buttonStyle={{
				backgroundColor: "#466DA1",
				borderWidth: 2,
				borderColor: "white",
				borderRadius: 30
			}}
			containerStyle={{
				width: "40%",
				marginVertical: 10,

				alignSelf: "start"
			}}
			titleStyle={{ fontWeight: "bold" }}
		/>
	);
};
const styles = StyleSheet.create({
	container: {
		width: "90%",
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center"
	},
	buttonContainer: {
		width: "100%",
		marginTop: 50,
	},
	text: {
		fontSize: 22,
		textAlign: "left",
		fontWeight: "300"
	}
});

export default Screen1;
