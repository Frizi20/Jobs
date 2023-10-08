import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	FlatList,
	Image,
	ScrollView,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const jobTypes = ["Full-time", "Part-time", "Contractor", "CEO", "Junior"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
	const router = useRouter();
	const [activeJobType, setActiveJobType] = useState("Full-time");

	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.userName}>Hello Adrian</Text>
				<Text style={styles.welcomeMessage}>Find your perfect job</Text>
			</View>

			<View style={styles.searchContainer}>
				<View style={styles.searchWrapper}>
					<TextInput
						style={styles.searchInput}
						value={searchTerm}
						onChangeText={(text) => setSearchTerm(text)}
						placeholder="what are you looking for?"
					></TextInput>
				</View>
				<TouchableOpacity
					style={styles.searchBtn}
					onPress={() => {
						handleClick();
					}}
				>
					<Image
						source={icons.search}
						resizeMethod="scale"
						style={styles.searchBtnImage}
					/>
				</TouchableOpacity>
			</View>

			<View style={styles.tabsContainer}>
				<FlatList
					data={jobTypes}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={styles.tab(activeJobType, item)}
							onPress={() => {
								setActiveJobType(item);
								router.push(`/search/${item}`);
							}}
						>
							<Text style={styles.tabText(activeJobType, item)}>
								{" "}
								{item}{" "}
							</Text>
						</TouchableOpacity>
					)}
					keyExtractor={(item) => item}
					contentContainerStyle={{ columnGap: SIZES.small }}
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
					horizontal
				/>
			</View>
		</View>
	);
};

export default Welcome;