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
                    !token || !user ? NavEntries.filter((value) => !value.isMenu).map(item => <Tab.Screen name={item.name} component={item.component} key={item.name} />) :
                        NavEntries.filter((value) => value.isMenu).map(item => <Tab.Screen name={item.name} component={item.component} key={item.name} />)
                }
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation