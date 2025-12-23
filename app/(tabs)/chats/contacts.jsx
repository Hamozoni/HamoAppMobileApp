import { useEffect, useState } from "react";
import { ScrollView, Text, View, TouchableOpacity, Image } from "react-native";
import * as Contacts from "expo-contacts";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";


const bottons = [
    {
        text: 'New Group',
        iconName: 'people-outline',
        id: 1
    },
    {
        text: 'New Contact',
        iconName: 'person-add-outline',
        id: 2
    },
    {
        text: 'New Community',
        iconName: 'people-outline',
        id: 3
    },
    {
        text: 'New broadcast',
        iconName: 'megaphone-outline',
        id: 4
    }
]

export default function ContactsPage() {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        (async _ => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === "granted") {
                const { data } = await Contacts.getContactsAsync({ fields: [Contacts.Fields.PhoneNumbers] });
                setContacts(data);
                console.log(data.find((e) => e.name === "عمار شدة"));

            }

        })()
    }, []);

    const Buttons = ({ text, iconName, index }) => {
        return (
            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                <Ionicons name={iconName} size={24} color="#07d400ff" />
                <Text
                    style={{ borderBottomWidth: index === bottons.length - 1 ? 0 : 1, borderBottomColor: "#eee", flex: 1, paddingVertical: 16 }}>
                    {text}
                </Text>
            </TouchableOpacity>
        )
    };

    const ContactCard = ({ contact }) => {
        return (
            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", gap: 10, paddingVertical: 5 }}>
                <View style={{ width: 35, height: 35, borderRadius: "50%", backgroundColor: "#eee", justifyContent: "center", alignItems: "center" }}>
                    <Ionicons name="person" size={20} color="#8d8d8dff" />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 5, flex: 1, justifyContent: "space-between" }}>
                    <View >
                        <Text style={{ fontSize: 14, fontWeight: "bold" }}>{contact.name}</Text>
                        <View style={{ flexDirection: "row", gap: 5, flex: 1 }}>
                            {
                                contact?.phoneNumbers?.map((phone) => (
                                    <Text style={{ color: "#313131ff", fontSize: 12 }} key={phone.id}>{phone.number}</Text>
                                ))
                            }
                        </View>

                    </View>
                    <TouchableOpacity>
                        <Text style={{ color: "#07d400ff" }}>invite</Text>
                    </TouchableOpacity>
                </View>

            </TouchableOpacity>
        )
    };

    return (
        <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ flex: 1, paddingHorizontal: 16 }}>
                <View style={{ backgroundColor: "#fff", paddingHorizontal: 16, borderRadius: 10, marginVertical: 20 }}>
                    {
                        bottons.map(({ text, iconName, id }, index) => (
                            <Buttons key={id} text={text} iconName={iconName} index={index} />
                        ))
                    }
                </View>
                <View style={{ backgroundColor: "#fff", padding: 16, borderRadius: 10 }}>
                    {
                        contacts.map((contact) => (
                            <ContactCard key={contact.id} contact={contact} />
                        ))
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}