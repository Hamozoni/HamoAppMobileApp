
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function ThemedSafeAreaView({ children }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView
                edges={["top", "bottom"]}
                style={{ flex: 1, padding: 10, backgroundColor: "#ffffffff" }}>
                {children}
            </SafeAreaView>
        </SafeAreaProvider>
    );
}