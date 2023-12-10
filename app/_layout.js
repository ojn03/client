import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Redirect } from "expo-router";

export default Stacklayout = () => {
	return (
		<Stack screenOptions={{headerShown:false}}>
			<Stack.Screen name="index" />
		</Stack>
		// <Redirect href={"index"}/>
	);
};

