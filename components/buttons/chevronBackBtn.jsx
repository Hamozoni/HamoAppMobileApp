import { useRouter } from "expo-router";
import { RoundedBtn } from "./roundedBtn";


export default function ChevronBackBtn() {

    const router = useRouter()
    return <RoundedBtn
        iconName="chevron-back"
        size={26}
        styles={{ padding: 0 }}
        onPress={() => router.back()}
    />
};