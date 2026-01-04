import { Stack } from "expo-router";
import { RoundedBtn } from "../../../components/buttons/roundedBtn";
import { useRouter } from "expo-router";

export default function SettingLayout() {
    const router = useRouter();
    return (
        <Stack >
            <Stack.Screen
                name="index"
                options={{
                    headerShown: true,
                    headerTransparent: true,
                    title: "Settings",
                    headerLargeTitle: true,
                    headerSearchBarOptions: {
                        placeholder: "Search",

                    }
                }} />
            <Stack.Screen
                name="profile"
                options={{
                    headerShown: true,
                    headerTransparent: true,
                    title: "Profile",
                    headerBackButtonMenuEnabled: true,
                    headerBackButtonDisplayMode: "minimal",
                }}
            />
            <Stack.Screen
                name="linked"
                options={{
                    headerShown: true,
                    headerTransparent: true,
                    title: "Linked Devices",
                    headerLeft: () => (
                        <RoundedBtn iconName="chevron-back" onPress={() => router.back()} />
                    )
                }}
            />
            <Stack.Screen
                name="account"
                options={{
                    headerShown: true,
                    headerTransparent: true,
                    title: "Account",
                    headerLeft: () => (
                        <RoundedBtn iconName="chevron-back" onPress={() => router.back()} />
                    )
                }}
            />
            <Stack.Screen
                name="privacy"
                options={{
                    headerShown: false,
                    title: "Privacy"
                }}
            />
            <Stack.Screen
                name="chats"
                options={{
                    headerShown: false,
                    title: "Chats"
                }}
            />
            <Stack.Screen
                name="notifications"
                options={{
                    headerShown: true,
                    title: "Notifications",
                    headerTransparent: false,
                    headerLeft: () => (
                        <RoundedBtn iconName="chevron-back" onPress={() => router.back()} />
                    )
                }}
            />
            <Stack.Screen
                name="storage"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="invite"
                options={{
                    headerShown: true,
                    headerTransparent: true,
                    title: "Invite a friend",
                    headerLeft: () => (
                        <RoundedBtn iconName="chevron-back" onPress={() => router.back()} />
                    ),
                    headerSearchBarOptions: {
                        placeholder: 'Search'
                    }
                }}
            />
        </Stack>
    );
}