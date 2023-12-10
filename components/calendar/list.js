import { StyleSheet, Text, View, Image } from "react-native";
import { pills } from "../../DB/data";
import React from "react";
import { groupBy } from "core-js/actual/array/group-by";
import { formatTime } from "../../utils";

export default function List() {
	const today = new Date();
	const groupsByDate = pills.reduce((x, y) => {
		(x[y.date.toDateString()] = x[y.date.toDateString()] || []).push(y);

		return x;
	}, {});
	const dates = Object.keys(groupsByDate);
	return (
		<View>
			<Text style={styles.headerText}>Prescription List</Text>
			{Object.entries(groupsByDate).map(([date, val]) => (
				<View key={date}>
					<HR />
					<Text style={styles.dateText}>{date}</Text>
					{val.map((pill, idx) => (
						<ListItem
							key={idx}
							title={pill.title}
							time={formatTime(pill.time)}
							dosage={pill.dosage}
							color={pill.color}
						/>
					))}
				</View>
			))}
		</View>
	);
}

function ListItem({ title, time, dosage, color }) {
	return (
		<View style={styles.pillItemContainer}>
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
				<View style={{ justifyContent: "center", marginLeft: 10, gap: 5 }}>
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
				<Image
					style={{
						width: "5%",
						resizeMode: "contain",
						marginLeft: "auto",
						marginRight: "5%"
					}}
					source={require("../../assets/Bell.png")}
				/>
			</View>
		</View>
	);
}

function HR() {
	return (
		<View
			style={{
				height: 1,
				backgroundColor: "#ddd",
				width: "75%",
				alignSelf: "center",
				margin: 15
			}}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		width: "100%"
	},
	headerText: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#1E4D93",
		alignSelf: "center"
	},
	dateText: {
		fontSize: 20,
		fontWeight: "800",
		color: "#ED712E",
		alignSelf: "center",
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
		width: "100%",
		// backgroundColor:"#f0f",
		padding: 5,
		alignItems: "center",
		justifyContent: "center"
	}
});
