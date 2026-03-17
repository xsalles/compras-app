import { TouchableOpacity, Text } from "react-native";
import { IButtonProps } from "@/types/components/Button";
import { styles } from "./styles";

export default function Button({ title, ...rest }: IButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
