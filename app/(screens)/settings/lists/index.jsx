import { Text, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native"
import ThemedSafeAreaView from "../../../../components/themedViews/safeAreaView";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { useRouter } from "expo-router";

const lists = [
    {
        title: 'Unread (preset)',
        link: '/settings/lists/unread',
        id: 1
    },
    {
        title: 'Favorites',
        link: '/settings/lists/favorites',
        id: 2
    },
    {
        title: 'Groups (preset)',
        link: '/settings/lists/groups',
        id: 3
    },
]
export default function SettingsLists() {

    const router = useRouter();

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
    };


    const ListsLinksBtn = ({ title, link }) => {
        return (
            <TouchableOpacity
                onPress={() => { router.push(link) }}
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    paddingVertical: 15,
                    borderBottomWidth: 1,
                    borderBottomColor: "#e5e5e5ff"
                }}>
                <Text style={{ flex: 1, fontSize: 18, fontWeight: 500, color: "#5f5959ff" }}>
                    {title}
                </Text>
                <Ionicons name="chevron-forward" size={20} color="black" />
            </TouchableOpacity >
        )
    }
    return (
        <ThemedSafeAreaView>
            <ScrollView>
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
                    <TouchableOpacity style={styles.createListBtn}>
                        <Ionicons name="add" color="#055a05ff" size={22} />
                        <Text style={{ fontSize: 18, color: "#055a05ff", fontWeight: 500 }}>Create a custom list</Text>
                    </TouchableOpacity>
                </View>
                <Text
                    style={{
                        fontSize: 18,
                        color: "#808080ff",
                        margin: 20,
                    }}>

                    Your lists
                </Text>
                <View style={{ paddingHorizontal: 10, backgroundColor: "#f8f5f5ff", borderRadius: 10 }}>
                    {
                        lists.map((list) => (
                            <ListsLinksBtn
                                key={list.id}
                                title={list.title}
                                link={list.link}
                            />
                        ))
                    }
                </View>
                <Text
                    style={{
                        fontSize: 18,
                        color: "#808080ff",
                        margin: 20,
                    }}>

                    Available presets
                </Text>
                <View style={{ padding: 20, backgroundColor: "#f8f5f5ff", borderRadius: 10 }}>
                    <Text style={{ fontSize: 16, color: "#808080ff", textAlign: "center" }}>
                        If you remove a preset list like Unread or Groups, it will become available here.
                    </Text>
                </View>

            </ScrollView>
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
    },
    createListBtn: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#dcf1d2ff",
        gap: 5,
        width: "100%", height: 45,
        borderRadius: 15,
    }
});
