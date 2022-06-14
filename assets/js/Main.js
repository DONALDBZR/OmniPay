// Importing components from React Native
import { StyleSheet, View, Button } from 'react-native';
// Main class
class Main {
    // Constructor method
    constructor() { }
    // Render method
    render() {
        return (
            <View style={Stylesheet.main}>
                <View style={Stylesheet.button}>
                    <Button title='Register' color="rgb(255, 255, 0)" onPress={this.handleRegister()} />
                </View>
                <View style={Stylesheet.button}>
                    <Button title='Login' color="rgb(128,255,0)" onPress={this.handleLogin()} />
                </View>
            </View>
        );
    }
    // Register handler method
    handleRegister() { }
    // Login handler method
    handleLogin() { }
}
// Creating the stylesheet
const Stylesheet = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    button: {
        flex: 0.333,
        paddingHorizontal: 20
    }
});
// Exporting components
export { Main };