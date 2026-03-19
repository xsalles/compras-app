import { COLORS } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderColor: COLORS.border.primary,
    },
    containerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    nameItem: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.text.content
    }
})