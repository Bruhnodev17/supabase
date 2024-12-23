import colors from "@/constants/colors"
import Colors from "@/constants/colors"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, } from "react-native"
import { router } from "expo-router"
import { Ionicons } from "@expo/vector-icons"

export default function SignUp() {
    return (
        <View style={styles.container}>

            <View style={styles.header}>

                <TouchableOpacity style={styles.backButton} 
                onPress={() =>router.back()}
                >
                    <Ionicons
                        name="arrow-back" size={24} color={colors.white}
                    />
                </TouchableOpacity>

                <Text style={styles.logoText}>Dev
                    <Text style={{ color: Colors.green }}>App</Text>
                </Text>
                <Text style={styles.slogan}>
                    Criar uma Conta
                </Text>
            </View>

            <View style={styles.form}>

                <View>
                    <Text style={styles.label}>Nome Completo</Text>
                    <TextInput
                        placeholder="Digite seu nome completo..."
                        style={styles.input}
                    />

                </View>

                <View>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        placeholder="Digite seu email..."
                        style={styles.input}
                    />

                </View>


                <View>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        placeholder="Digite sua senha..."
                        style={styles.input}
                        secureTextEntry
                    />

                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

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
    header: {
        paddingLeft: 14,
        paddingRight: 14,
    },
    logoText: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.gray,
        marginBottom: 8,
    },
    slogan: {
        fontSize: 34,
        color: Colors.white,
        marginBottom: 34,
    },
    form: {
        flex: 1,
        backgroundColor: colors.white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingTop: 24,
        paddingLeft: 24,
        paddingRight: 14,
    },
    label: {
        color: colors.zinc,
        marginBottom: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 8,
        marginBottom: 16,
        padding: 12,
    },
    button: {
        backgroundColor: colors.green,
        paddingTop: 14,
        paddingBottom: 14,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        borderRadius: 10,
    },
    buttonText: {
        color: "#000",
        fontWeight: "bold",
    },
    backButton: {
        backgroundColor:" rgba(255, 255, 255, 0.55)",
        alignSelf: "flex-start",
        padding: 8,
        borderRadius: 8,
        marginBottom: 10,
    }
})