import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import { COLORS, icons, images, SIZES } from "../constants";
import { Stack, useRouter } from "expo-router";
import {
	ScreenHeaderBtn,
	Popularjobs,
	Welcome,
	Nearbyjobs,
} from "../components";

export default function Home() {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState("");


	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: COLORS.lightWhite,
			}}
		>
			<Stack.Screen
				options={{
					headerStyle: {
						backgroundColor: COLORS.lightWhite,
					},
					headerShadowVisible: false,
					headerLeft: () => (
						<ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
					),
					headerRight: () => (
						<ScreenHeaderBtn
							iconUrl={images.profile}
							dimension="60%"
						/>
					),
					headerTitle: "",
				}}
			/>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View
					style={{
						flex: 1,
						padding: SIZES.medium,
					}}
				>
					<Welcome
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
						handleClick={() => {
							if (searchTerm) {
								router.push(`/search/${searchTerm}`);
							}
						}}
					/>
					<Popularjobs />
					<Nearbyjobs />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		padding: 24,
	},
	main: {
		flex: 1,
		justifyContent: "center",
		maxWidth: 960,
		marginHorizontal: "auto",
	},
	title: {
		fontSize: 64,
		fontWeight: "bold",
	},
	subtitle: {
		fontSize: 36,
		color: "#38434D",
	},
});
