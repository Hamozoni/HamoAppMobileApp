
import { Text, View } from "react-native";

export default function TextMessageBubble({ message }) {
    return (
        <View >
            <Text style={{ color: message?.senderId === 1 ? "white" : "black", fontSize: 18, marginBottom: 10 }}>{message?.text}</Text>
        </View>
    );
};