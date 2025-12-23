import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export const RoundedBtn = ({ iconName, large = false, onPress = () => '' }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ width: large ? 45 : 30, height: large ? 45 : 30, borderRadius: "50%", backgroundColor: "#eeeeeeff", justifyContent: "center", alignItems: "center" }}>
            <Ionicons name={iconName} size={large ? 30 : 24} />
        </TouchableOpacity>
    );
};