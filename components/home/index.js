import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Tablayouts from "../tablayouts.js";
import TodaysPillPack from "../../components/home/todaysPillPack/index.js";
import UpcomingTasks from "./upcomingTasks/index.js";
import React from "react";

function Header() {
	return (
		<View style={styles.headerContainer}>
			<Image style={styles.image} source={require("../../assets/oldPic.png")} />
			<Text style={styles.headerText}>Hi Alexandria</Text>
		</View>
	);
}

//layout for today's pill pack, upcoming tasks, etc...
function Children() {
	return (
		<View style={styles.childrenContainer}>
			<TodaysPillPack />
			<UpcomingTasks />
		</View>
	);
}

export default function Home() {
	return (
		<Tablayouts
			header={<Header />}
			children={<Children />}
			// Footer={Footer}
		/>
	);
}

const styles = StyleSheet.create({
	headerContainer: {
		height: "10%",
		width: "100%",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-end"
	},
	childrenContainer: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		// height: "100%",
		gap: 20
	},
	image: {
		// width: "fit-content",
		marginLeft: 0,
		height: "85%",
		borderRadius: 50,
		resizeMode: "contain"
	},
	headerText: {
		fontSize: 40,
		fontWeight: "500",
		// alignSelf: "center",
		marginBottom: 3,
		color: "#000"
	}
});
