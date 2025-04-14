import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../views/HomeScreen"
import LoginScreen from "../views/LoginScreen"
import { useAuth } from "../auth/Auth"

const Stack = createNativeStackNavigator()

const Navigation = () => {
    const { token, user } = useAuth()

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {token && user ? (
                    <Stack.Screen name="Home" component={HomeScreen} />
                ) : (
                    <Stack.Screen name="Login" component={LoginScreen} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation