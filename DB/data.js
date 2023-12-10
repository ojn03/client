import { Image, StyleSheet } from "react-native";

function addDays(date, days) {
	const copy = new Date(Number(date));
	copy.setDate(date.getDate() + days);
	return copy;
}

const today = new Date();
const tomorrow = addDays(today, 1);
const twoDaysLater = addDays(today, 2);

export const pills = [
	{
		title: "Yellow Pills",
		time: { hr: 8, min: 0 },
		dosage: 5,
		color: "#F1CA47",
		date: today
	},

	{
		title: "Purple Capsules",
		time: { hr: 9, min: 0 },
		dosage: 10,
		color: "#A35D9F",
		date: tomorrow
	},
	{
		title: "Blue Drops",
		time: { hr: 14, min: 0 },
		dosage: 15,
		color: "#466DA1",
		date: twoDaysLater
	},
	{
		title: "Rouge Pills",
		time: { hr: 14, min: 0 },
		dosage: 1,
		color: "#E74C3C",
		date: today

	},
	{
		title: "Percocet",
		time: { hr: 16, min: 0 },
		dosage: 3,
		color: "#F39C12",
		date: twoDaysLater
	},
	{
		title: "Xanax",
		time: { hr: 18, min: 0 },
		dosage: 3,
		color: "#287233",
		date: tomorrow
	},
	{
		title: "Aderall",
		time: { hr: 18, min: 30 },
		dosage: 3,
		color: "#6A5F31",
		date: twoDaysLater
	}
];

const styles = StyleSheet.create({
	imageStyle: {
		resizeMode: "contain",
		width: 30,
		height:"auto",
	}
});

export const tasks = [
	{
		title: "Refill Advil Prescription",
		date: new Date(2021, 10, 31),
		completed: false,
		icon: (
			<Image
				style={styles.imageStyle}
				source={require("../assets/Task1Icon.png")}
			/>
		)
	},
	{
		title: "Charge Wearable",
		date: new Date(2021, 9, 11),
		completed: false,
		icon: (
			<Image
				style={styles.imageStyle}
				source={require("../assets/Task2Icon.png")}
			/>
		)
	},
	{
		title: "Doctor Visit",
		date: new Date(2021, 11, 2),
		completed: false,
		icon: (
			<Image
				style={styles.imageStyle}
				source={require("../assets/Task3Icon.png")}
			/>
		)
	}
];
