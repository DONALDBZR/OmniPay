// Importing components from React Native
import { StyleSheet, View, Image } from 'react-native';
// Header class
class Header {
    // Constructor method
    constructor() { }
    // Render method
    render() {
        return (
            <View style={Stylesheet.header}>
                <Image source={require('../Images/Logo.png')} style={Stylesheet.logo} />
            </View>
        );
    }
}
// Creating the stylesheet
const Stylesheet = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: 'rgb(255, 128, 0)',
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 50.437,
        height: 100
    }
});
// Exporting components
export { Header };