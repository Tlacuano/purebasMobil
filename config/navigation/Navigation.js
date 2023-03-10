import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../../modules/auth/adapters/screens/Login";
import CreateAccount from "../../modules/users/adapters/screens/CreateAccount";
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

export default function Navigation() {
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
					name="login"
					component={Login}
					options={{ title: "Login" }}
				/>
				<Tab.Screen
					name="create-account"
					component={CreateAccount}
					options={{ title: "Create Account" }}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const screenOptions = (route, color) => {
	let iconName;
	switch (route.name) {
		case "login":
			iconName = "login";
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
