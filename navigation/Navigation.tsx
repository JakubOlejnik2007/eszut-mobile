import { NavigationContainer } from "@react-navigation/native"
import { useAuth } from "../auth/Auth"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavEntries } from "./NavEntries";
import { BlurView } from "@react-native-community/blur";
const Navigation = () => {
    const { token, user } = useAuth()

    const Tab = createBottomTabNavigator()

    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                            tabBarStyle: {
                            backgroundColor: '#121212',
                            borderTopWidth: 0,
                            height: 60,
                            },
                            tabBarActiveTintColor: 'white',
                            tabBarInactiveTintColor: 'gray',
                            tabBarLabelStyle: {
                            fontSize: 12,
                            },
                            headerStyle: {
                                backgroundColor: 'rgb(57, 57, 57)', // Add some semi-transparency
                            },
                            //   headerTransparent: true,
                               headerTintColor: 'white', // color of back button and title
                            //   headerTitleStyle: {
                            //     fontWeight: 'bold',
                            //     fontSize: 18,
                            // },
            }}>
                      
                {
                    
                    !token || !user ? NavEntries.filter((value) => !value.isMenu).map(item => <Tab.Screen name={item.name} component={item.component} key={item.name} />) :
                        NavEntries.filter((value) => value.isMenu).map(item => <Tab.Screen name={item.name} component={item.component} key={item.name} />)
                }
                
            </Tab.Navigator>
            
        </NavigationContainer>
    )
}

export default Navigation