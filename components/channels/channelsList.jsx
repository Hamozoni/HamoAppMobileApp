
import { View } from "react-native";
import { ChatCard } from "../cards/chatCard";

const ChannelsList = ({ channels }) => {
    return (

        <View style={{ gap: 10 }}>
            {
                channels.length > 0 ? (
                    channels.map((channel) => (
                        <ChatCard key={channel.id} chat={channel} />
                    ))
                ) : (
                    <Text>No channels found</Text>
                )
            }
        </View>
    );
};
export default ChannelsList;