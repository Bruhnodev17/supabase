import colors from "@/constants/colors"
import Colors from "@/constants/colors"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, } from "react-native"
import { Link } from "expo-router"
import { useState } from "react"
import { supabase } from "../../lib/supabase"
import {router} from "expo-router"

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSigIn(){
        setLoading(true)

        const {data, error} = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        if(error){
            Alert.alert("Error", error.message)
            setLoading(false)
            return
        }
        setLoading(false)
        router.replace("/(panel)/profile/page")
    }
    
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.logoText}>Dev
                    <Text style={{ color: Colors.green }}>App</Text>
                </Text>
                <Text style={styles.slogan}>
                    Authenticator
                </Text>
            </View>

            <View style={styles.form}>

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

                <TouchableOpacity style={styles.button} onPress={handleSigIn}>
                    <Text style={styles.buttonText}>
                        {loading ? "Carregando" : "Acessar"}
                        </Text>
                </TouchableOpacity>

                <Link href="/(auth)/signup/page" style={styles.link}>
                    <Text>Ainda não possui uma conta? Cadastre-se gratuitamente!</Text>
                </Link>

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
    link: {
        fontSize: 12.5,
        marginTop: 16,
        textAlign: "center",
        fontWeight: "bold",
    },
})