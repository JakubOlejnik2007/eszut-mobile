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
        <View>
            <Text>Zgłoś usterkę</Text>
            {
                categoriesQuery.isLoading && <Text>Ładowanie kategorii...</Text>
            }
            {
                categoriesQuery.isError && <Text>Wystąpił błąd podczas ładowania kategorii</Text>
            }
            {
                categoriesQuery.isSuccess && (
                    <Picker
                        selectedValue={selectedValue}
                        onValueChange={(itemValue: string) => setSelectedValue(itemValue)}
                    >
                        {
                            categoriesQuery.data.map((place: any) => (
                                <Picker.Item label={place.name} value={place._id} key={place._id} />
                            ))
                        }
                    </Picker>
                )
            }
            {
                placesQuery.isLoading && <Text>Ładowanie miejsc...</Text>
            }
            {
                placesQuery.isError && <Text>Wystąpił błąd podczas ładowania miejsc</Text>
            }
            {
                placesQuery.isSuccess && (
                    <Picker
                        selectedValue={selectedValue}
                        onValueChange={(itemValue: string) => setSelectedValue(itemValue)}
                    >
                        {
                            placesQuery.data.map((place: any) => (
                                <Picker.Item label={place.name} value={place._id} key={place._id} />
                            ))
                        }
                    </Picker>
                )
            }

        </View>
    )
}

export default ReportIssueScreen;