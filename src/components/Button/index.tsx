import { TouchableOpacity, Text } from "react-native";
import { IButtonProps } from "@/interfaces/components/Button";
import { styles } from "./styles";

export default function Button({ ...props }: IButtonProps) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}