
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

export default function ThemedSafeAreaView({ children }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView edges={["top"]} style={{ flex: 1, padding: 10, backgroundColor: "#ffffffff" }}>
                <ScrollView style={{ flex: 1 }} contentInsetAdjustmentBehavior="automatic">
                    {children}
                </ScrollView>
            </SafeAreaView>

        </SafeAreaProvider>
    );
}