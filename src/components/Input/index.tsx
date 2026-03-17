import { COLORS } from "@/theme/colors";
import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

export default function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor={COLORS.text.muted}
      style={styles.container}
      {...rest}
    />
  );
}
