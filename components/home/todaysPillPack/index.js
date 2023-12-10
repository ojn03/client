import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { pills } from "../../../DB/data";
import CheckBox from "expo-checkbox";
import { useState } from "react";
import PillItem from "./PillItem.js";
import { formatTime } from "../../../utils";

export default function TodaysPillPack() {
	const morningPills = pills.filter((pill) => pill.time.hr < 12);
	const afternoonPills = pills.filter(
		(pill) => pill.time.hr >= 12 && pill.time.hr < 18
	);
	const eveningPills = pills.filter((pill) => pill.time.hr >= 18);
	return (
		<View style={styles.container}>
			<Text style={styles.titleText}>Today's Pill Pack</Text>

			{morningPills.length != 0 && (
				<Text style={styles.subTitleText}>Morning Pills</Text>
			)}

			{morningPills.map((pill, idx) => (
				<PillItem
					key={idx}
					title={pill.title}
					time={formatTime(pill.time)}
					dosage={pill.dosage}
					color={pill.color}
				/>
			))}
			{afternoonPills.length != 0 && (
				<>
					<View
						style={{
							height: 1,
							width: "95%",
							alignSelf: "center",
							backgroundColor: "#EAEAEA",
							marginTop: 10
						}}
					/>
					<Text style={styles.subTitleText}>Afternoon Pills</Text>
				</>
			)}
			{afternoonPills.map((pill, idx) => (
				<PillItem
					key={idx}
					title={pill.title}
					time={formatTime(pill.time)}
					dosage={pill.dosage}
					color={pill.color}
				/>
			))}

			{eveningPills.length != 0 && (
				<>
					<View
						style={{
							height: 1,
							width: "95%",
							alignSelf: "center",
							backgroundColor: "#EAEAEA",
							marginTop: 10
						}}
					/>
					<Text style={styles.subTitleText}>Evening Pills</Text>
				</>
			)}
			{eveningPills.map((pill, idx) => (
				<PillItem
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
	},
	subTitleText: {
		paddingTop: 10
		// fontSize: 15,
		// fontWeight: "200",
	}
});

