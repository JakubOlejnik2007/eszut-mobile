import React, { useEffect, useState, createContext, useContext } from 'react'
import { View, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../views/HomeScreen';
import LoginScreen from '../views/LoginScreen'
import Navigation from '../navigation/Navigation'



type UserData = {
    userId: string
    email: string
    username: string
    role: number
}

type AuthData = {
    token: string | null
    user: UserData | null
    setAuth: (auth: AuthData) => void
    clearAuth: () => void
}

const defaultAuth: AuthData = {
    token: null,
    user: null,
    setAuth: () => { },
    clearAuth: () => { }
}

export const AuthContext = createContext<AuthData>(defaultAuth)

export const useAuth = () => useContext(AuthContext)

const decodeToken = (token: string): UserData | null => {
    try {
        const payload = token.split('.')[1]
        const decoded = JSON.parse(atob(payload))
        return decoded
    } catch {
        return null
    }
}

const Auth = () => {
    const [token, setToken] = useState<string | null>(null)
    const [user, setUser] = useState<UserData | null>(null)
    const [loading, setLoading] = useState(true)

    const setAuth = ({ token, user }: { token: string | null; user: UserData | null }) => {
        setToken(token)
        setUser(user)
        if (token) AsyncStorage.setItem('userToken', token)
        else AsyncStorage.removeItem('userToken')
    }

    const clearAuth = () => {
        setAuth({ token: null, user: null })
    }

    useEffect(() => {
        const init = async () => {
            const storedToken = await AsyncStorage.getItem('userTodken')
            if (storedToken) {
                setToken(storedToken)
                setUser(decodeToken(storedToken))
            }
            setLoading(false)
        }
        init()
    }, [])

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    return (
        <AuthContext.Provider value={{ token, user, setAuth, clearAuth }}>
            <Navigation />
        </AuthContext.Provider>
    )
}

export default Auth