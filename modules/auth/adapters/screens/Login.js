import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import React, { useState } from "react";
import { Input, Button, Image, Icon } from "@rneui/base";
import { isEmpty } from "lodash";
import Loading from "../../../../kernel/components/Loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
	const [error, setError] = useState({ email: "", password: "" });
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(true);
	const [fallSession, setFallSession] = useState(false);
	const [show, setShow] = useState(false);
	const auth = getAuth();
	const login = () => {
		if (!(isEmpty(email) || isEmpty(password))) {
			console.log("listos para iniciar sesión");
			signInWithEmailAndPassword(auth, email, password)
				.then(async (userCredential) => {
					// Signed in
					const user = userCredential.user;

					// ...
				})
				.catch((error) => {
					setError({
						email: "",
						password: "Usuario y/o contraseña incorrectos",
					});
					setShow(false);
					const errorCode = error.code;
					const errorMessage = error.message;
				});
		} else {
			setError({
				email: "Campo Obligatorio",
				password: "Campo Obligatorio",
			});
		}
	};
	return (
		<View style={styles.container}>
			<ScrollView>
				<Image
					source={require("../../../../assets/logo.png")}
					resizeMode="contain"
					style={styles.logotype}
				/>
				<Input
					placeholder="Correo electronico"
					keyboardType="email-address"
					containerStyle={styles.input}
					rightIcon={
						<Icon type="material-comunity" name="email" size={22} />
					}
					onChange={(event) => setEmail(event.nativeEvent.text)}
					autoCapitalize="none"
					errorMessage={error.email}
				/>
				<Input
					placeholder="Contraseña"
					containerStyle={styles.input}
					onChange={(event) => setPassword(event.nativeEvent.text)}
					secureTextEntry={showPassword}
					rightIcon={
						<Icon
							type="material-community"
							name={
								showPassword ? "eye-off-outline" : "eye-outline"
							}
							color=""
						/>
					}
					errorMessage={error.password}
				/>
				<Button
					title="Iniciar sesion"
					Icon={
						<Icon
							type="material-community"
							name="Login"
							size={22}
							color="#007bff"
							onPress={() => setShowPassword(!showPassword)}
						/>
					}
					buttonStyle={styles.btnSuccess}
					containerStyle={styles.btnContainer}
					onPress={login}
				/>
				<Loading setShow={show} text="Registrar usuario" />
			</ScrollView>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		height: "100%",
		marginHorizontal: 20,
	},
	logotype: {
		width: "100%",
		height: 150,
		marginTop: 20,
	},
	input: {
		width: "100%",
		marginVertical: 5,
	},
	btnSuccess: {
		color: "#FFF",
		backgroundColor: "#28a745",
	},
	btnContainer: {
		margin: 16,
	},
});
