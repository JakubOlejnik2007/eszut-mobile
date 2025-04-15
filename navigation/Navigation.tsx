import { NavigationContainer } from "@react-navigation/native"
import { useAuth } from "../auth/Auth"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavEntries } from "./NavEntries";

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