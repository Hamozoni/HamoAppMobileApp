import { TextInput, TouchableOpacity, View, Keyboard } from "react-native";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";
import { useEffect, useState, useRef } from "react";

export default function ChatFooter({ id }) {

    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const [attachmentVisible, setAttachmentVisible] = useState(false);

    const textInputRef = useRef(null);

    useEffect(() => {

        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            (e) => {
                setAttachmentVisible(false);
                setKeyboardVisible(true);
                setKeyboardHeight(e.endCoordinates.height);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
                setAttachmentVisible(true);
            }
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const toggleAttachment = () => {
        if (keyboardVisible) {
            Keyboard.dismiss();
            setAttachmentVisible(true);

        } else {
            setAttachmentVisible(prev => !prev);
            textInputRef.current.focus();
        }
    }




    return (
        <View style={{ paddingHorizontal: 10, paddingTop: 10, backgroundColor: "#fff" }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                <TouchableOpacity
                    style={{
                        width: 30,
                        height: 30,
                        justifyContent: "center",
                        alignItems: "center"
                    }} onPress={() => toggleAttachment()}>
                    {
                        attachmentVisible ?
                            <FontAwesome6 name="keyboard" size={25} color="#1fa105" />
                            : <Ionicons name="add-outline" size={30} color="#1fa105" />

                    }
                </TouchableOpacity>
                <TextInput
                    ref={textInputRef}
                    placeholder="Type a message"
                    style={{ height: 30, flex: 1, borderWidth: 1, borderColor: "#ccc", borderRadius: 20, paddingHorizontal: 10 }}
                />
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <TouchableOpacity>
                        <Ionicons name="camera-outline" size={28} color="#1fa105" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="mic-outline" size={28} color="#1fa105" />
                    </TouchableOpacity>
                </View>
            </View>
            {
                (!keyboardVisible && attachmentVisible) && (
                    <View style={{ height: keyboardHeight }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <TouchableOpacity>
                                <Ionicons name="camera-outline" size={28} color="#1fa105" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionicons name="mic-outline" size={28} color="#1fa105" />
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }

        </View>
    );
}