import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../../modules/profile/adapters/screens/Profile";

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
	return (
		<Stack.Navigator
			screenOptions={() => ({
				headerShown: false,
			})}
		>
			<Stack.Screen name="profile" component={Profile} />
		</Stack.Navigator>
	);
}
