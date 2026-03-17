import { COLORS } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.accentBrand,
        color: COLORS.background.primary,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 46,
        borderRadius: 8
    },
    text: {
        color: COLORS.text.light,
        fontSize: 14,
        fontWeight: 600
    }
})