import { Ionicons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";


export const SearchInput = () => {
    return (
        <View style={{
            height: 40,
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 20,
            marginBottom: 5,
            flexDirection: "row",
            paddingHorizontal: 10,
            alignItems: "center",
        }}>
            <Ionicons name="search" size={26} color="gray" />
            <TextInput
                placeholder="Search"
                style={{
                    flex: 1,
                    fontSize: 18,
                    fontWeight: "medium",
                    color: "gray",
                }}

            />
        </View>
    );
};