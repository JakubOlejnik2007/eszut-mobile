import { View, Text } from "react-native"
import { Picker } from "@react-native-picker/picker"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"

import axios from 'axios';
import { getCategories, getPlaces } from "../service/apiFetchFunctions";



const ReportIssueScreen = () => {
    return (
        <>
            <View>
                <Text>Zgłoś usterkę</Text>
            </View>
        </>
    )
}

export default ReportIssueScreen;