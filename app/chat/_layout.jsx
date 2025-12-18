// import 'react-native-reanimated';
import { Stack } from "expo-router";
import { ChatHeaderLeft, ChatHeaderMiddle, ChatHeaderRight } from "../../components/chats/chatHeader";
export default function ChatLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="[id]"
                options={
                    ({ route }) => {
                        const { id } = route.params;
                        return {
                            headerShown: true,
                            headerLeft: () => <ChatHeaderLeft id={id} />,
                            headerRight: () => <ChatHeaderRight id={id} />,
                            headerTitle: () => <ChatHeaderMiddle id={id} />,
                        }

                    }
                }
            />
            <Stack.Screen
                name="mediaGallery"
                options={{
                    headerShown: false,
                    gestureEnabled: false,
                }}
            />
        </Stack>
    );
}