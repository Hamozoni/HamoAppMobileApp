import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { RoundedBtn } from "../../ui/roundedBtn";

export default function AudioRecorder({ setIsAudioRecorder }) {

    const [timer, setTimer] = useState(0);
    const [isRecording, setIsRecording] = useState(true);
    const [recording, setRecording] = useState(null);


    return (
        <View style={{ padding: 20, position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 999, backgroundColor: "#fff" }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 10, marginBottom: 10 }}>
                <Text>{timer}</Text>
                <View>

                </View>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="timer-alert-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10, justifyContent: "space-between" }}>
                <RoundedBtn
                    iconName="trash-outline"
                    size={28}
                    color="red"
                    styles={{ padding: 0 }}
                />
                {
                    isRecording ?
                        <RoundedBtn
                            iconName="pause-outline"
                            size={24}
                            color="red"
                            styles={{ borderColor: "red", borderWidth: 2, padding: 3 }}
                            onPress={() => setIsRecording(false)}
                        /> :
                        <RoundedBtn
                            iconName="mic-outline"
                            size={34}
                            styles={{ padding: 0 }}
                            color="red"
                            onPress={() => setIsRecording(true)}
                        />
                }
                <RoundedBtn
                    iconName="send"
                    size={20}
                    color="white"
                    styles={{ backgroundColor: "#1fa105" }}
                    onPress={() => setIsAudioRecorder(false)}
                />
            </View>
        </View>
    );
}