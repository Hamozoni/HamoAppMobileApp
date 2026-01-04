import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export const RoundedBtn = ({ iconName, onPress = () => '', styles, size = 24, color = "black" }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[{ justifyContent: "center", alignItems: "center", borderRadius: "50%", padding: 10 }, styles]}>
            <Ionicons name={iconName} size={size} color={color} />
        </TouchableOpacity>
    );
};