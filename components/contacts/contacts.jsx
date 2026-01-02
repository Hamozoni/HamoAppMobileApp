import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as Contacts from "expo-contacts";
import ContactCard from "../cards/contactCard";

export default function ContactsList({ children }) {
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
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={{ flex: 1, paddingHorizontal: 16 }}
                    showsVerticalScrollIndicator={false}
                >
                    <View
                        style={{
                            backgroundColor: "#fff",
                            paddingHorizontal: 16,
                            borderRadius: 10,
                            marginVertical: 20
                        }}
                    >
                        {children}
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
        </SafeAreaProvider>
    )
}