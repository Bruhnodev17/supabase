import colors from "@/constants/colors"
import Colors from "@/constants/colors"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from "react-native"
import { router } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"

export default function SignUp() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    function handleSignUp(){
        console.log({
            name, email, password
        })
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{flex:1, backgroundColor: colors.white}}>
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
                        value={name}
                        onChangeText={setName}
                    />

                </View>

                <View>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        placeholder="Digite seu email..."
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                    />

                </View>


                <View>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        placeholder="Digite sua senha..."
                        style={styles.input}
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />

                </View>

                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

            </View>

        </View>
        </ScrollView>
        </SafeAreaView>
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