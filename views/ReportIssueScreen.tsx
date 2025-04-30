import { View, Text } from "react-native"
import { Picker } from "@react-native-picker/picker"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"

import axios from 'axios';
import { getCategories, getPlaces } from "../service/apiFetchFunctions";



const ReportIssueScreen = () => {
    const [categoriesQuery, placesQuery] = [
        useQuery({
            queryKey: ["categories"],
            queryFn: getCategories
        }),
        useQuery({
            queryKey: ["places"],
            queryFn: getPlaces
        })
    ]



    const [selectedValue, setSelectedValue] = useState("")



    if (categoriesQuery.isError || placesQuery.isError) {
        console.log("Categories Error:", {
            message: categoriesQuery.error?.message,
            name: categoriesQuery.error?.name
        });

        console.log("Places Error:", {
            message: placesQuery.error?.message,
            name: placesQuery.error?.name
        });
    }



    return (
        <>
            <View>
                <Text>Zgłoś usterkę</Text>
            </View>
        </>
    )
}

export default ReportIssueScreen;