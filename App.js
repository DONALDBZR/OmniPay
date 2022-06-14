// Importing Status Bar from Expo
import { StatusBar } from 'expo-status-bar';
// Importing Stylesheet, Text and View from React Native
import { StyleSheet, Text, View } from 'react-native';
// App class
class App {
	// Constructor method
	constructor() {
		// App.render()
		this.render();
	}
	// Render method
	render() {
		console.log("Application executed!");
		return (
			<View style={styles.container}>
				<Text>Open up App.js to start working on your application!</Text>
				<StatusBar style="auto" />
			</View>
		);
	}
}
// Creating the stylesheet
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgb(255, 0, 0)',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
// Exporting components
export { App }