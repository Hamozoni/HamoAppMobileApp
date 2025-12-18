import { View } from "react-native";
import {
    TextMessageBubble,
    ImageMessageBubble,
    VideoMessageBubble,
    ContactMessageBubble,
    LocationMessageBubble,
    CallMessageBubble,
    DocumentMessageBubble,
    AudioMessageBubble,
    MessageStatusBubble
} from "../chats/messagesBubals";

export default function MessageCard({ message }) {


    const MessagesBubble = () => {
        switch (message?.type) {
            case "text":
                return <TextMessageBubble message={message} />;
            case "image":
                return <ImageMessageBubble message={message} />;
            case "video":
                return <VideoMessageBubble message={message} />;
            case "contact":
                return <ContactMessageBubble message={message} />;
            case "location":
                return <LocationMessageBubble message={message} />;
            case "call":
                return <CallMessageBubble message={message} />;
            case "audio":
                return <AudioMessageBubble message={message} />;
            case "sticker":
                return <ImageMessageBubble message={message} />;
            case "document":
                return <DocumentMessageBubble message={message} />;
            default:
                return null;
        }
    };

    return (
        <View
            style={{
                marginVertical: 2,
                backgroundColor: message?.type === "sticker" ? "unset" : message?.senderId === 1 ? "#007AFF" : "#efefffff",
                borderRadius: 10,
                padding: 3,
                width: "fit-content",
                minWidth: 30,
                maxWidth: "88%",
                alignSelf: message?.senderId === 1 ? "flex-end" : "flex-start",
            }}
            key={message?.id}
        >
            <View
                style={{
                    padding: message?.type === "image" || message?.type === "video" || message?.type === "sticker" || message?.type === "document" || message?.type === "location" ? 0 : 10,
                    borderRadius: 10,
                    backgroundColor: message?.type === "sticker" ? "unset" : "#1807071a",
                }}>
                <MessagesBubble />
                {
                    (message?.type !== "call" && message?.type !== "audio") && (
                        <MessageStatusBubble message={message} />
                    )
                }
            </View>
        </View>
    );
}