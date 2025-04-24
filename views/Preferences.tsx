import { View, Text, Button } from "react-native"
import { useAuth } from "../auth/Auth";
import mapRoleToWord from "../utils/mapRoleToWord";

const Preferences = () => {

    const { user, clearAuth, token } = useAuth();

    const payload = (token as string).split('.')[1]
    const decoded = JSON.parse(atob(payload))

    const dates = [new Date(decoded.iat * 1000), new Date(decoded.exp * 1000)]

    console.log("Decoded token: ", decoded)
    return (
        <>
            <View>
                <Text>Dane użytkownika:</Text>
                <Text>Nazwa: {user?.username} ({user?.email})</Text>
                <Text>Rola: {mapRoleToWord(user?.role as number)}</Text>
                <Text>Data utworzenia: {dates[0].toLocaleString("pl")}</Text>
                <Text>Data wygaśnięcia: {dates[1].toLocaleString("pl")}</Text>
                <Button
                    title="Wyloguj"
                    onPress={() => {
                        clearAuth();
                    }}
                />
            </View>
        </>
    )
}

export default Preferences;