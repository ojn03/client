import { View, SafeAreaView, Text, Image, StyleSheet } from "react-native";
import Home from "../../components/home/index.js";
import React from "react";

const home = () => {
	return (
		<View style={styles.container}>
			<Home />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center"
	}
});
export default home;
