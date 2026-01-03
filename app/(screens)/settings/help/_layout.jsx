import { useRouter, Stack } from "expo-router";
import { RoundedBtn } from "../../../../components/ui/roundedBtn";

export default function SettingsHelpLayout() {
    const router = useRouter();
    return (
        <Stack screenOption={{ headerShown: false }}>
            <Stack.Screen
                name="index"
                options={{
                    title: "Help and feedback",
                    headerLeft: () => (
                        <RoundedBtn iconName='chevron-back' onPress={() => router.back()} />
                    )
                }}
            />
        </Stack>
    );
}