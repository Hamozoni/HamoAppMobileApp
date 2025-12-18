import { Image, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const CallCard = ({ call }) => {
    return (
        <View style={{ flexDirection: "row", gap: 10, marginBottom: 10, alignItems: "center" }}>
            <Image source={{ uri: call?.caller?.photoURL }} style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: "#ccc" }} />
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottomColor: "#eeebebff",
                    borderBottomWidth: 1,
                    paddingBottom: 10
                }}
            >
                <View style={{}}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>{call?.caller?.displayName}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Ionicons name="call-outline" size={16} color="black" />
                        <Text style={{ fontSize: 12, color: "#666", fontWeight: "bold" }}>{call?.status}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                    <Text style={{ fontSize: 12, color: "#666", fontWeight: "bold" }}>{call?.caller?.created}</Text>
                    <TouchableOpacity>
                        <Ionicons name="ellipsis-vertical-outline" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}