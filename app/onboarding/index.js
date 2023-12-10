import {
	SafeAreaView,
	View,
	Text,
	FlatList,
	StyleSheet,
	useWindowDimensions,
	Image
} from "react-native";
import React from "react";
import screens from "../../components/onboarding";
import { Link } from "expo-router";
const index = () => {
	const { width } = useWindowDimensions();
	return (
		<SafeAreaView style={styles.container}>
			<Image style={{resizeMode:"contain", width:250}} source={require("../../assets/textLogo.png")} />
			<View style={{height:5, width:"90%", backgroundColor:"#ED712E",marginTop:10, marginBottom:20,borderRadius:5}}/>

			<FlatList
				data={screens}
				renderItem={({ item }) => <OnboardingItem item={item} />}
				horizontal
				showsHorizontalScrollIndicator
				pagingEnabled
			/>
			<View style={{height:5, width:"90%", backgroundColor:"#ED712E",borderRadius:5}}/>
			<Link href={"/home"}>
				<Image
					style={{ resizeMode: "contain", width: width * 0.75 }}
					source={require("../../assets/longNext.png")}
				/>
			</Link>
		</SafeAreaView>
	);
};

const OnboardingItem = ({ item }) => {
	const { width } = useWindowDimensions();
	return <View style={[styles.onboardingItem, { width }]}>{item}</View>;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff"
	},
	onboardingItem: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
});
export default index;
