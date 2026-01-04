import { Text, TouchableOpacity, View, StyleSheet } from "react-native"
import ThemedSafeAreaView from "../../../../components/themedViews/safeAreaView";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
export default function SettingsLists() {

    const HeaderBtns = ({ children }) => {
        return (
            <View style={{ position: "relative" }}>
                <View
                    style={[styles.listBtns, { backgroundColor: "#fbfce6ff" }]}>

                </View>
                <View style={[styles.listBtns, { position: "absolute", left: 8, top: -8, backgroundColor: "#fbfce6ff" }]}>
                </View>
                <View style={[styles.listBtns, { position: "absolute", left: 16, top: -16 }]}>
                    {children}
                </View>

            </View >

        )
    }
    return (
        <ThemedSafeAreaView>
            <View style={{ paddingHorizontal: 10, paddingVertical: 30, borderRadius: 10, backgroundColor: "#f8f5f5ff" }}>
                <View style={{ flexDirection: "row-reverse", justifyContent: "center", alignItems: "center", gap: 5, paddingVertical: 30, }}>
                    <HeaderBtns >
                        <MaterialCommunityIcons name="hospital" size={48} color="#14bd14ff" />
                    </HeaderBtns>
                    <HeaderBtns>
                        <Ionicons name="bag-handle-sharp" size={32} color="#14bd14ff" />
                    </HeaderBtns>
                    <HeaderBtns>
                        <Ionicons name="heart-sharp" size={42} color="#14bd14ff" />
                    </HeaderBtns>
                </View>
                <Text
                    style={{
                        fontSize: 18, color: "#808080ff", textAlign: "center", marginBottom: 20
                    }}>Any list you create becomes a filter at the top of your Chats tab</Text>
                <TouchableOpacity style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#dcf1d2ff",
                    gap: 5,
                    width: "100%", height: 45,
                    borderRadius: 15,
                }}>
                    <Ionicons name="add" color="#055a05ff" size={22} />
                    <Text style={{ fontSize: 18, color: "#055a05ff", fontWeight: 500 }}>Create a custom list</Text>
                </TouchableOpacity>
            </View>
        </ThemedSafeAreaView>
    );
};


const styles = StyleSheet.create({
    listBtns: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e5f8e5ff",
        width: 70, height: 50,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "#9c9a9aff"
    }
});
