import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function TaskItem({ title, date, icon }) {
	const iconPath = `../../../assets/${icon}`;
	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={require("../../../assets/Bell.png")}
			/>
			{icon}
			<View style={styles.textContainer}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.date}>{date.toDateString().toUpperCase()}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		gap: 30,
		width: "100%",
		marginTop: 10,
		height: 50
	},
	image: {
		height: "auto",
		width: 20,
		resizeMode: "contain"
	},
	title: {
		fontSize: 15,
		fontWeight: "bold"
	},
	date: {
		// fontSize: 10,
		fontWeight: "100"
	},
	textContainer: {
		marginTop: 5,
		gap: 2
	}
});
