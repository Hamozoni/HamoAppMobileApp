
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { CHATS } from "../../../constants/chats";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import { ChatCard } from "../../../components/cards/chatCard";


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
                marginRight: 5,
                height: 40,
                justifyContent: "center",
                alignItems: "center"
            }}>
            <Text style={{ color: active ? "#000000ff" : "gray", fontSize: 18, fontWeight: "medium" }}>{title}</Text>
        </TouchableOpacity>
    );
}

const Chats = () => {
    return (
        <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
            <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 10 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ paddingVertical: 20 }}>
                        <FlatList
                            data={["All", "Unread", "Favorite", "Groups", "Communities"]}
                            renderItem={({ item }) => <Button title={item} />}
                            keyExtractor={(item) => item}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />

                    </View>
                    <View style={{ flex: 1 }}>
                        <FlatList
                            data={CHATS}
                            renderItem={({ item }) => (<ChatCard key={item.id} chat={item} />)}
                            keyExtractor={(item) => item.id}
                            contentContainerStyle={{ gap: 10 }}
                            showsVerticalScrollIndicator={false}
                        />

                    </View>

                </View>


            </ScrollView>
        </SafeAreaView>
    );
};

export default Chats; 