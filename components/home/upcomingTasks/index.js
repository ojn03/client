import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TaskItem from "./TaskItem.js";
import { tasks } from "../../../DB/data.js";

export default function UpcomingTasks() {
	return (
		<View style={styles.container}>
			<Text style={styles.titleText}>Upcoming Tasks</Text>
			<TaskItem {...tasks[0]} />
			<View
				style={{
					height: 1,
					width: "95%",
					alignSelf: "center",
					backgroundColor: "#EAEAEA",
					marginTop: 10
				}}
			/>
			<TaskItem {...tasks[1]} />
			<View
				style={{
					height: 1,
					width: "95%",
					alignSelf: "center",
					backgroundColor: "#EAEAEA",
					marginTop: 10
				}}
			/>
			<TaskItem {...tasks[2]} />
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
