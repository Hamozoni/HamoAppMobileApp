
import { ChatCard } from "../cards/chatCard";
import { FlatList } from "react-native";

const ChatsLists = ({ chats }) => {
    return (
        <FlatList
            data={chats}
            renderItem={({ item }) => (<ChatCard key={item.id} chat={item} />)}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ gap: 10 }}
            showsVerticalScrollIndicator={false}
        />
    );
};
export default ChatsLists;
