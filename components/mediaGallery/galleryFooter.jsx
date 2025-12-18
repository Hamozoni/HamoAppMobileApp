import { Text, View, TouchableOpacity } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function GalleryFooter() {
    return (
        <View >
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <TouchableOpacity>
                    <Octicons name="share" size={28} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="share-outline" size={28} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="play" size={28} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="star-outline" size={28} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="trash-outline" size={28} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}