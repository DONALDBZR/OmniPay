// Importing components from React Native
import { View, StyleSheet } from "react-native";
// Importing Header
import { Header } from "./Header";
// Importing Main
import { Main } from "./Main";
// Instantiating Header and Main
let header = new Header();
let main = new Main();
// Body class
class Body {
    // Constructor method
    constructor() { }
    // Render method
    render() {
        return (
            <View style={Stylesheet.body}>
                {header.render()}
                {main.render()}
            </View>
        );
    }
}
// Creating the Stylesheet
const Stylesheet = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "rgb(255, 0, 0)",
        alignItems: "center",
        justifyContent: "center"
    }
});
// Exporting components
export { Body };