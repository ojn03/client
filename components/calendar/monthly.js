import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { pills } from "../../DB/data";
import { formatTime } from "../../utils";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { useState, useEffect } from "react";

export default function Monthly() {
	const today = new Date();
	const [selected, setSelected] = useState(today.toISOString().slice(0, 10));
	const TodaysPills = pills.filter(
		(pill) => pill.date.toISOString().slice(0, 10) === selected
	);
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Medical Reminders</Text>

			<Calendar
				onDayPress={(day) => {
					setSelected(day.dateString);
				}}
				markedDates={{
					[selected]: {
						selected: true,
						disableTouchEvent: true,
						selectedColor: "#ED712E"
					}
				}}
				theme={{
					todayTextColor: "#ED712E",
					arrowColor: "#ED712E"
				}}
			/>
			<ScrollView
				horizontal
				contentContainerStyle={{ alignItems: "center" }}
				style={styles.monthlyPillsContainer}
			>
				{TodaysPills.map((pill, idx) => (
					<MonthlyPillItem
						key={idx}
						title={pill.title}
						time={formatTime(pill.time)}
						dosage={pill.dosage}
						color={pill.color}
					/>
				))}
			</ScrollView>
		</View>
	);
}

function MonthlyPillItem({ title, time, dosage, color }) {
	return (
		<View style={{ ...styles.pillItem, backgroundColor: color }}>
			<View style={{ alignItems: "center", justifyContent:"center" }}>
				<Text style={{ fontSize: 16, color:"#fff" }}>{title}</Text>
				<Text style={{ fontSize: 16, color:"#fff" }}>{dosage}</Text>
			</View>
			<View
				style={{
					justifyContent: "center",
					flexDirection: "row",
					alignItems: "center"
				}}
			>
				<View style={{ height: "90%", width: 2, backgroundColor: "#fff" }} />
				<Text
					style={{
						marginLeft: 5,
						fontSize: 20,
						fontWeight: "600",
						color: "#fff"
					}}
				>
					{time}
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// alignItems: "center",
		width: "100%"
	},
	header: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#1E4D93",
		marginVertical: 5,
		alignSelf: "center"
	},
	pillItem: {
		flexDirection: "row",
		width: 300,
		height: "80%",
		borderRadius: 20,
		marginHorizontal: 10,
		padding: 30,
		justifyContent: "space-between"
	},
	monthlyPillsContainer: {
		flexDirection: "row",
		height: "25%",
		marginTop: 10,
	}
});
