import { Stack } from "expo-router";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import { supabase } from "./lib/supabase";

export default function RootLayout(){
  return(
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  )
}

 function MainLayout() {

  const {setAuth} = useAuth()
  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      console.log("session user", session?.user)
    })
  },[])
  return (
    <Stack>

      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="(auth)/signup/page"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="(panel)/profile/page"
        options={{ headerShown: false }}
      />

    </Stack>
  )
}