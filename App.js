// Importing Status Bar from Expo
import { StatusBar } from 'expo-status-bar';
// Importing Stylesheet, Text and View from React Native
import { StyleSheet, Text, View } from 'react-native';
// App class
class App {
    // Constructor method
    constructor() { }
    // Render method
    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
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
export { App };