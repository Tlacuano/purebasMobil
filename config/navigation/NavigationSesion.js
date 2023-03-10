import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "../stacks/HomeStack";
import ProfileStack from "../stacks/ProfileStack";
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

export default function NavigationSesion() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName="login"
				screenOptions={({ route }) => ({
					tabBarIcon: ({ color }) => screenOptions(route, color),
					tabBarActiveTintColor: "#228B22",
					tabBarInactiveTintColor: "gray",
				})}
			>
				<Tab.Screen
					name="Home"
					component={HomeStack}
					options={{ title: "Home" }}
				/>
				<Tab.Screen
					name="Profile"
					component={ProfileStack}
					options={{ title: "Profile" }}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const screenOptions = (route, color) => {
	let iconName;
	switch (route.name) {
		case "login":
			iconName = "home";
			break;
		case "create-account":
			iconName = "account-plus";
			break;
	}
	return (
		<Icon
			type="material-community"
			name={iconName}
			size={22}
			color={color}
		/>
	);
};
