import { Text, View } from "react-native";
import { RoundedBtn } from "../../components/ui/roundedBtn";
import { SearchInput } from "../../components/ui/searchInput";
import { CallsList } from "../../components/calls/callsList";

const Calls = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 10, paddingTop: 40 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <RoundedBtn iconName="ellipsis-horizontal" />
                <RoundedBtn iconName="add" />
            </View>
            <Text style={{ fontSize: 30, fontWeight: "bold", marginVertical: 10 }}>Calls</Text>
            <SearchInput />
            <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 20 }}>
                <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5 }}>
                    <RoundedBtn iconName="call-outline" large={true} />
                    <Text>Call</Text>
                </View>
                <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5 }}>
                    <RoundedBtn iconName="calendar-outline" large={true} />
                    <Text>Schedulr</Text>
                </View>
                <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5 }}>
                    <RoundedBtn iconName="keypad-outline" large={true} />
                    <Text>Keypad</Text>
                </View>
                <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5 }}>
                    <RoundedBtn iconName="heart-outline" large={true} />
                    <Text>Favorite</Text>
                </View>
            </View>
            <View>
                <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 10 }}>Recent</Text>
            </View>
            <CallsList />
        </View>
    );
};

export default Calls;