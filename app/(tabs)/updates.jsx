import { Text, TouchableOpacity, View } from "react-native";
import { SearchInput } from "../../components/ui/searchInput";
import { RoundedBtn } from "../../components/ui/roundedBtn";
import { StatusPanel } from "../../components/status/statusPanel";
import ChannelsList from "../../components/channels/channelsList";
import { CHATS } from "../../constants/chats";
import { ScrollView } from "react-native";

const Updates = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#fff",
                paddingHorizontal: 10,
                paddingTop: 40
            }}
        >
            <View>
                <RoundedBtn
                    iconName="ellipsis-horizontal"
                />
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: "bold",
                        marginVertical: 10
                    }}
                >Updates
                </Text>
                <SearchInput />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusPanel />
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20, paddingTop: 30 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Channels</Text>
                    <TouchableOpacity >
                        <Text style={{ fontSize: 14, color: "#424141ff", fontWeight: "bold", borderRadius: 15, backgroundColor: "#e7e7e7ff", paddingHorizontal: 10, paddingVertical: 5 }}>Explore</Text>
                    </TouchableOpacity>
                </View>
                <ChannelsList channels={CHATS} />

            </ScrollView>
        </View>
    );
};

export default Updates;
