
import { Image, TouchableOpacity } from "react-native";

export default function LocationMessageBubble({ message }) {
    const locationUrl = `https://maps.googleapis.com/maps/api/staticmap?
center=${message?.metadata?.latitude},${message?.metadata?.longitude}
&zoom=16
&size=600x300
&maptype=roadmap
&markers=color:red|${message?.metadata?.latitude},${message?.metadata?.longitude}
&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
    console.log(locationUrl);
    return (
        <TouchableOpacity>
            <Image
                source={{ uri: locationUrl }}
                style={{ width: 250, height: 250, borderRadius: 10 }}
            />
        </TouchableOpacity>
    );
};