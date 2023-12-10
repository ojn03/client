import { StyleSheet, Text, View, Image } from "react-native";
import CalendarTabs from "./tabs.js";
import Tablayouts from "../tablayouts.js";
import React from "react";
import { useState } from "react";
import Daily from "./daily.js";
import Monthly from "./monthly.js";
import List from "./list.js";

function Header() {
	return (
		<View style={styles.headerContainer}>
			<Text style={styles.headerText}>Pill Calendar</Text>
		</View>
	);
}

function Children() {
	const [Tab, setTab] = useState("Daily"); //Daily, Monthly, List
	return (
		<View style={styles.container}>
			<CalendarTabs view={Tab} setView={setTab} />

			<View style={styles.tabContainer}>
				{Tab === "Daily" ? (
					<Daily />
				) : Tab === "Monthly" ? (
					<Monthly />
				) : (
					<List />
				)}
			</View>
		</View>
	);
}

export default function Calendar() {
	return <Tablayouts header={<Header />} children={<Children />} />;
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		width: "100%"
		// height:"100%"
	},
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
	},
	tabContainer: {
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingTop: 20,
		backgroundColor: "#fff",
		width: "100%",
		marginTop: 20,

		height: "auto",
		minHeight: 600
	}
});
