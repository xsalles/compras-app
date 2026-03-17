import { COLORS } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.accentBrand,
        color: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 46,
        borderRadius: 8
    },
    text: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: 600
    }
})