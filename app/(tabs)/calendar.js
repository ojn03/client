import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import Calendar from "../../components/calendar/index.js";
import React from "react";

const list = () => {
	return (
		<SafeAreaView
			style={styles.container}
		>
			<Calendar/>	
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:"center"
	}
})

export default list;
