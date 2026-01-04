import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text } from "react-native";

export default function SettingsStorage() {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <Text>Storage and data</Text>
                </ScrollView>
            </SafeAreaView>

        </SafeAreaProvider>
    );
}