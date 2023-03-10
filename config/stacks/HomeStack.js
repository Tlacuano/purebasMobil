import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../modules/home/adapters/screens/Home";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
	return (
		<Stack.Navigator
			screenOptions={() => ({
				headerShown: false,
			})}
		>
			<Stack.Screen name="home" component={Home} />
		</Stack.Navigator>
	);
}
