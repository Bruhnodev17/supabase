import { View, Text, StyleSheet, Button, Alert} from "react-native"
import { supabase } from "../../lib/supabase"
import { useAuth } from "@/src/contexts/AuthContext"

export default function Profile(){

    const {setAuth} = useAuth()

    async function  handleSignOut (){
       const {error} = await supabase.auth.signOut()
       setAuth(null)

       if(error){
        Alert.alert("Error", "Erro ao sair da conta!")
        return
       }
    }

    return(
        <View style={styles.container}>
            <Text>
                Página Perfil
                <Button
                title="Finalizar sessão"
                onPress={handleSignOut}>

                </Button>
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})