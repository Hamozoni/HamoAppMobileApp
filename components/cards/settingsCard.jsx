import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const SettingsCard = ({ iconName, title }) => {
    return (
        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 10, height: 50 }}>
            <Ionicons name={iconName} size={20} color="#555353ff" />
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "#eee",
                    flex: 1,
                    height: 50
                }}
            >
                <Text style={{ fontSize: 16, color: "#000" }}>{title}</Text>
                <Ionicons name="chevron-forward" size={24} color="#000" />
            </View>
        </TouchableOpacity>
    );
};