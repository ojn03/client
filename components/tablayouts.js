import {
	ScrollView,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Image
} from "react-native";
import React from "react";

export default function Tablayouts({ header, children }) {
	return (
		<ScrollView
			contentContainerStyle={{ alignItems: "center" }}
			style={styles.container}
		>
			{header}
			{/* horizontal rule */}
			<View
				style={{
					height: 5,
					width: "90%",
					backgroundColor: "#ED712E",
					marginTop: 10,
					marginBottom: 15,
					borderRadius: 5
				}}
			/>
			{children}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#EAEAEA",
		// alignItems: "center",
		width: "100%"
	}
});
