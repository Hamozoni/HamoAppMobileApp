import { Stack } from "expo-router";
import { TouchableOpacity, Text } from "react-native";
import ChevronBackBtn from "../../../components/buttons/ChevronBackBtn";

export default function SettingsLayout() {
    return (
        <Stack  >
            <Stack.Screen
                name="lists"
                options={{
                    title: "Lists",
                    headerLeft: () => (<ChevronBackBtn />),
                    headerRight: () => (
                        <TouchableOpacity>
                            <Text style={{ fontSize: 18, fontWeight: 500, color: "#2d2e2dff" }}>Record</Text>
                        </TouchableOpacity>
                    )
                }}
            />

            <Stack.Screen
                name="broadcasts"
                options={{
                    title: "Broadcasts messages",
                    headerLeft: () => (<ChevronBackBtn />),
                }}
            />
            <Stack.Screen
                name="starred"
                options={{
                    title: "Starred",
                    headerLeft: () => (<ChevronBackBtn />),
                    headerRight: () => (
                        <TouchableOpacity>
                            <Text>Edit</Text>
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen
                name="help"
                options={{
                    headerShown: false
                }}
            />
        </Stack>
    );
}