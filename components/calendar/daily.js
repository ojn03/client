import { StyleSheet, Text, View, Image } from "react-native";
import { pills } from "../../DB/data";
import { formatTime } from "../../utils";
import React from "react";

export default function DailyTab() {
	const morningPills = pills.filter((pill) => pill.time.hr < 12);
	const afternoonPills = pills.filter(
		(pill) => pill.time.hr >= 12 && pill.time.hr < 18
	);
	const eveningPills = pills.filter((pill) => pill.time.hr >= 18);
	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>Today's Pills</Text>

			<Image
				style={{ resizeMode: "contain", height: 120 }}
				source={require("../../assets/TodaysPills.png")}
			/>

			{morningPills.length != 0 && (
				<Text style={styles.subHeader}>Morning</Text>
			)}

			{morningPills.map((pill, idx) => (
				<DailyPillItem
					key={idx}
					title={pill.title}
					time={formatTime(pill.time)}
					dosage={pill.dosage}
					color={pill.color}
				/>
			))}
			{afternoonPills.length != 0 && (
				<Text style={styles.subHeader}>Afternoon</Text>
			)}
			{afternoonPills.map((pill, idx) => (
				<DailyPillItem
					key={idx}
					title={pill.title}
					time={formatTime(pill.time)}
					dosage={pill.dosage}
					color={pill.color}
				/>
			))}
			{eveningPills.length != 0 && (
				<Text style={styles.subHeader}>Evening</Text>
			)}
			{eveningPills.map((pill, idx) => (
				<DailyPillItem
					key={idx}
					title={pill.title}
					time={formatTime(pill.time)}
					dosage={pill.dosage}
					color={pill.color}
				/>
			))}
		</View>
	);
}

export function DailyPillItem({ title, time, dosage, color }) {
	return (
		<View style={styles.pillItemContainer}>
			<Image
				style={{ width: "5%", resizeMode: "contain" }}
				source={require("../../assets/Bell.png")}
			/>

			<View
				style={{
					backgroundColor: color,
					height: 100,
					width: "90%",
					borderRadius: 20,
					flexDirection: "row",
					justifyContent: "flex-start",
					padding: 5,
					alignItems: "center"
				}}
			>
				<Image
					style={{ resizeMode: "contain", width: "10%", marginLeft: "5%" }}
					source={require("../../assets/pill.png")}
				/>
				<View style={{ justifyContent: "center", marginLeft: 10, gap:5 }}>
					<Text style={{ fontSize: 16, fontWeight: "500", color: "#fff" }}>
						{title}
					</Text>

					<View style={{ flexDirection: "row", gap: 20 }}>
						<Text style={{ fontSize: 14, fontWeight: "300", color: "#fff" }}>
							Dosage: {dosage}
						</Text>
						<Text style={{ fontSize: 14, fontWeight: "300", color: "#fff" }}>
							Time: {time}
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		width: "100%"
	},
	headerText: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#1E4D93",
		marginBottom: 20,
		marginTop: 10
	},
	subHeader: {
		fontSize: 16,
		fontWeight: "200",
		color: "#1E4D93",
		paddingVertical: 25
	},
	pillItemContainer: {
		flexDirection: "row",
		width: "100%",
		// backgroundColor:"#f0f",
		padding: 5,
		alignItems: "center",
		justifyContent: "space-between"
	}
});
