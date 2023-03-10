import { getAuth, signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { Image, Input, Button, Icon } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";

export default function Profile() {
	const auth = getAuth();

	const handleSignOut = async () => {
		try {
			await signOut(auth);
			console.log("Usuario desconectado");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<View>
			<Button
				title="cerar sesion"
				containerStyle={styles.btnContainer}
				buttonStyle={styles.btn}
				onPress={handleSignOut}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	btn: {
		backgroundcolor: "#28a745",
	},
});
