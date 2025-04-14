import { Camera, CameraView } from "expo-camera";
import { useEffect, useState } from "react";
import { View, Text, Button, StatusBar, TextInput } from "react-native"
import { useAuth } from "../auth/Auth";

const LoginScreen = () => {
    const { addNewToken, token } = useAuth();

    const [hasPermission, setHasPermission] = useState<boolean | null>(null);

    useEffect(() => {
        const getCameraPermissions = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        };

        getCameraPermissions();
    }, []);

    const [scanned, setScanned] = useState(false);

    const handleBarcodeScanned = async ({ type, data }: { type: any, data: any }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        await handleSaveToken(data);
    };

    const handleSaveToken = async (new_token: string = '') => {
        addNewToken(new_token)
    }

    console.log(token)

    return (
        <>
            <View>
                <Text>LoginScreen</Text>
            </View>
        </>
    )
}

export default LoginScreen;