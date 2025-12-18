import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function MessageStatusBubble({ message }) {

    const isMedia = message?.type === "image" || message?.type === "video" || message?.type === "location";

    if (message?.senderId === 1) {

        return (

            <View
                style={{
                    position: isMedia ? "absolute" : "unset",
                    bottom: 0,
                    right: 0,
                    paddingHorizontal: 5,
                    borderRadius: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 5,
                        height: 8,
                    },
                    shadowOpacity: 10,
                    shadowRadius: 10,
                    elevation: 10,
                    backgroundColor: isMedia ? "#00000011" : "unset",
                    gap: 5
                }}
            >
                <Text
                    style={{
                        fontSize: 10,
                        fontWeight: "bold",
                        color: "#ffffffff"
                    }}
                >{message?.timestamp}
                </Text>
                <View >
                    {
                        message?.status === "sent" ? (
                            <Ionicons name="checkmark-sharp" size={16} color="white" />
                        ) : message?.status === "delivered" || message?.status === "readed" ? (
                            <Ionicons name="checkmark-done-sharp" size={16} color={message?.status === "delivered" ? "white" : "#80e280ff"} />
                        ) : (
                            <Ionicons name="stopwatch-outline" size={16} color="white" />

                        )
                    }
                </View>

            </View>
        );
    }

};