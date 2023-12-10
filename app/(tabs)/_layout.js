import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

const layout = () => {
	return (
		<>
			<SafeAreaView
				edges={["top"]}
				style={{ flex: 0, backgroundColor: "#EAEAEA" }}
			/>
			<Tabs
				screenOptions={{
					tabBarStyle: {
						backgroundColor: "#466da1",
						borderTopColor: "transparent",
						elevation: 0
					},
					tabBarShowLabel: false,
					headerShown: false,

				}}
			>
				<Tabs.Screen
					name="calendar"
					options={{
						// title: "Home",
						headerShown: false,
						tabBarIcon: () => (
							<TouchableOpacity>
								<Image source={require("../../assets/navCalendar.png")} />
							</TouchableOpacity>
						)
					}}
				/>
				<Tabs.Screen
					name="home"
					options={{
						// title: "Home",
						headerShown: false,
						tabBarIcon: () => (
							<TouchableOpacity>
								<Image source={require("../../assets/navPill.png")} />
							</TouchableOpacity>
						)
					}}
				/>
				<Tabs.Screen
					name="profile"
					options={{
						title: "Home",
						headerShown: false,
						tabBarIcon: () => (
							<TouchableOpacity>
								<Image source={require("../../assets/navProfile.png")} />
							</TouchableOpacity>
						)
					}}
				/>
			</Tabs>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "navyblue"
	}
});

export default layout;
