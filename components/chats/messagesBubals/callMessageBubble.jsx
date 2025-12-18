
import { Text, View, TouchableOpacity } from "react-native";
import { RoundedBtn } from "../../ui/roundedBtn";

export default function CallMessageBubble({ message }) {
    return (
        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", gap: 10, minWidth: 180 }}>
            <View>
                {
                    message?.metadata?.type === "video" ? (
                        <RoundedBtn
                            iconName="videocam"
                            large={true}
                        />
                    ) : (
                        <RoundedBtn
                            iconName="call"
                            large={true}
                        />
                    )
                }
            </View>
            <View>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>{message?.metadata?.type === "video" ? "Video Call" : "Voice Call"}</Text>
                <Text style={{ fontSize: 12, fontWeight: "bold" }}>{message?.metadata?.status === "missed" ? "No Answer" : message?.metadata?.duration}</Text>
            </View>
        </TouchableOpacity>
    );
};