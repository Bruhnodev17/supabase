import Colors from "@/constants/colors"
import { View, Text, StyleSheet } from "react-native"

export default function Login() {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.logoText}>Dev
                    <Text style={{color: Colors.green}}>App</Text>
                </Text>
                <Text style={ styles.slogan}>
                    Authenticator
                </Text>
            </View>

            

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: Colors.zinc,
    },
    header:{
        paddingLeft: 14,
        paddingRight:14,
    },
    logoText:{
        fontSize: 20,
        fontWeight: "bold",
        color:Colors.gray,
        marginBottom: 8,
    },
    slogan:{
        fontSize:34,
        color: Colors.white,
        marginBottom:34,
    }
})