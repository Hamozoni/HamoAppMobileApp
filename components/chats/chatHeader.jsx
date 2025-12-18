import { Image, Text, TouchableOpacity, View } from "react-native";
import { CHATS } from "../../constants/chats";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export const ChatHeaderLeft = ({ id }) => {

    const router = useRouter();
    return (
        <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#1fa105" />
        </TouchableOpacity>
    )
};

export const ChatHeaderMiddle = ({ id }) => {
    return (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, flex: 1 }}>
            <Image
                source={CHATS[Number.parseInt(id) - 1]?.contact?.photoURL}
                style={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#ccc" }}
            />
            <TouchableOpacity>
                <Text style={{ fontSize: 16, fontWeight: "500" }}>{CHATS[Number.parseInt(id) - 1]?.contact?.displayName}</Text>
                <Text style={{ fontSize: 14, color: "#666" }}>on line</Text>
            </TouchableOpacity>
        </View>
    )
};

export const ChatHeaderRight = ({ id }) => {
    return (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
            <TouchableOpacity>
                <Ionicons name="videocam-outline" size={24} color="#1fa105" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="call-outline" size={24} color="#1fa105" />
            </TouchableOpacity>
        </View>
    )
};