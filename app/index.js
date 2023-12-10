import React from "react";
import { Link, Redirect } from "expo-router";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";

export default Splash = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={{alignItems:"center"}}>
				<Image source={require("../assets/splashLogo.png")} />
				<Image
					style={{ marginTop: 45 }}
					source={require("../assets/textLogo.png")}
				/>
			</View>

			<Link href={"/onboarding"}>
				<Image
					style={{ resizeMode: "contain", width:100 }}
					source={require("../assets/shortNext.png")}
				/>
			</Link>
		</SafeAreaView>
		// <Redirect href={"/home"}/>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "space-around"
	}
});
