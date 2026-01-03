import { ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function SettingsStarred() {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <Text>Settings Starred</Text>
                </ScrollView>
            </SafeAreaView>

        </SafeAreaProvider>
    );
}