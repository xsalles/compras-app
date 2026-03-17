import { COLORS } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background.elevated,
        color: COLORS.text.content,
        width: '100%',
        height: 48,
        paddingHorizontal: 12,
        paddingVertical: 16,
        borderColor: COLORS.border.primary,
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 14
    }
})