
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CHATS } from "../../constants/chats";
import ChatsLists from "../../components/chats/chatsLists";
import { SearchInput } from "../../components/ui/searchInput";


const Button = ({ title, active = false }) => {
    return (
        <TouchableOpacity
            style={{
                paddingHorizontal: 15,
                borderRadius: 15,
                backgroundColor: active ? "rgba(156, 240, 240, 1)" : "transparent",
                borderColor: "#eee",
                borderWidth: 2,
                paddingHorizontal: 10,
                paddingVertical: 5,
                marginRight: 5
            }}>
            <Text style={{ color: active ? "#000000ff" : "gray", fontSize: 18, fontWeight: "medium" }}>{title}</Text>
        </TouchableOpacity>
    );
}

const Chats = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 10, paddingTop: 40 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <TouchableOpacity style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: "#eeeeeeff", justifyContent: "center", alignItems: "center" }}>
                    <Ionicons name="ellipsis-horizontal" size={26} />
                </TouchableOpacity>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity >
                        <Ionicons name="camera" size={26} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 10, width: "auto", height: "auto", borderRadius: "50%", backgroundColor: "green", justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name="add" size={26} color="white" />
                    </TouchableOpacity>

                </View>
            </View>
            <Text style={{ fontSize: 30, fontWeight: "bold", marginVertical: 10 }}>Chats</Text>
            <SearchInput />
            <View style={{ marginVertical: 10 }}>
                <ScrollView horizontal contentContainerStyle={{ flexDirection: "row", alignItems: "center", justifyContent: "center", height: 50, maxHeight: 50 }} showsHorizontalScrollIndicator={false}>
                    <Button title="All" active={true} />
                    <Button title="Unread" />
                    <Button title="Favorite" />
                    <Button title="Groups" />
                    <Button title="Communities" />
                </ScrollView>

            </View>
            <ChatsLists chats={CHATS} />

        </View>
    );
};

export default Chats; 