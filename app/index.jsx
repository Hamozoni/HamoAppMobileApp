import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Home() {

    const router = useRouter();


    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity onPress={() => router.replace("/(tabs)/chats")} >
                <Text>Go to Chats</Text>
            </TouchableOpacity>
        </View>
    );
}