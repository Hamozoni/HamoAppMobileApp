import { Text, TouchableOpacity, View } from "react-native";
import { SearchInput } from "../../../components/ui/searchInput";
import { RoundedBtn } from "../../../components/ui/roundedBtn";
import { StatusPanel } from "../../../components/status/statusPanel";
import ChannelsList from "../../../components/channels/channelsList";
import { CHATS } from "../../../constants/chats";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Updates = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, padding: 10, paddingTop: 140 }}>
                <StatusPanel />
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20, paddingTop: 30 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Channels</Text>
                    <TouchableOpacity >
                        <Text style={{ fontSize: 14, color: "#424141ff", fontWeight: "bold", borderRadius: 15, backgroundColor: "#e7e7e7ff", paddingHorizontal: 10, paddingVertical: 5 }}>Explore</Text>
                    </TouchableOpacity>
                </View>
                <ChannelsList channels={CHATS} />

            </ScrollView>
        </SafeAreaView>
    );
};

export default Updates;
