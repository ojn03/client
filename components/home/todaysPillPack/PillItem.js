import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CheckBox from "expo-checkbox";
import { useState } from "react";


export default function PilItem ({ title, time, dosage, color }) {
	const [toggleCheckBox, setToggleCheckBox] = useState(false);

	return (
		<View style={{ ...styles.pillItemContainer }}>
			<View
				style={{
					width: "12%",
					height: 12,
					backgroundColor: color,
					borderRadius: "7%",
				}}
			/>
			<Text style={styles.pillItemText}>
				{dosage} {title}
			</Text>

			<View style={{ marginLeft: "auto", flexDirection: "row", gap: 10 }}>
				<Text style={{ ...styles.pillItemText, fontWeight: 100 }}>{time}</Text>
				<CheckBox
					style={{ borderRadius: 10 }}
					disabled={false}
					value={toggleCheckBox}
					onValueChange={() => setToggleCheckBox(!toggleCheckBox)}
				/>
			</View>
		</View>
	);
};

const shadowProp = StyleSheet.create({
	shadowProp: {
		shadowColor: "#171717",
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.3,
		shadowRadius: 4
	}
});

const styles = StyleSheet.create({
	pillItemContainer: {
		flexDirection: "row",
		justifyContent: "flex-start",
		gap: 10,
		alignItems: "center",
		margin: 10,
		marginBottom: 0,
		// ...shadowProp.shadowProp,
		// shadowOffset: { width: -2, height: 3 },

	},
	pillItemText: {
		fontSize: 15,
		fontWeight: "300"
	}
});