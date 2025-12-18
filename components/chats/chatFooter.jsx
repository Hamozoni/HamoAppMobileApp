import { TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ChatFooter({ id }) {
    return (
        <View style={{ paddingHorizontal: 10, paddingTop: 10, backgroundColor: "#fff" }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                <TouchableOpacity>
                    <Ionicons name="add-outline" size={28} color="#1fa105" />
                </TouchableOpacity>
                <TextInput
                    placeholder="Type a message"
                    style={{ height: 30, flex: 1, borderWidth: 1, borderColor: "#ccc", borderRadius: 20, paddingHorizontal: 10 }}
                />
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <TouchableOpacity>
                        <Ionicons name="camera-outline" size={28} color="#1fa105" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="mic-outline" size={28} color="#1fa105" />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}