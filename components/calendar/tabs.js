import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";

export default function calendartabs({view, setView}) {
	return (
		<View style={styles.container}>
			<TabButton view={view} setView={setView} text="Daily" />
			<TabButton view={view} setView={setView} text="Monthly" />
			<TabButton view={view} setView={setView} text="List" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		width: "90%"
	},
	inActiveTab:{
		backgroundColor: "#EAEAEA",
		borderWidth: 2,
		borderColor: "#99ACC5",
		borderRadius: 30,
		padding:5,
		marginRight:10
	},
	activeTab:{
		backgroundColor: "#ECAE8C",
		borderWidth: 2,
		borderColor: "#ECAE8C",
		borderRadius: 30,
		padding:5,
		marginRight:10
	}
});

const TabButton = ({ text, view, setView }) => {
	return (
		<Button
			onPress={() => setView(text)}
			title={text}
			buttonStyle={text === view ? styles.activeTab : styles.inActiveTab}
			containerStyle={{
				// width: "25%",
				// alignSelf: "flex-start",
				// gap:10
				// marginRight:10


			}}
			titleStyle={{ fontWeight: "bold", fontSize: 15, color:text === view ?  "#fff" :"#99ACC5" }}
		/>
	);
};

