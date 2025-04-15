import { NavigationContainer } from "@react-navigation/native"
import { useAuth } from "../auth/Auth"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavEntries } from "./NavEntries";

const Navigation = () => {
    const { token, user } = useAuth()

    const Tab = createBottomTabNavigator()

    return (
        <NavigationContainer>
            <Tab.Navigator>
                {
                    !token || !user ? NavEntries.filter((value) => !value.isMenu).map(item => <Tab.Screen name={item.name} component={item.component} />) :
                        NavEntries.filter((value) => value.isMenu).map(item => <Tab.Screen name={item.name} component={item.component} />)
                }
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation