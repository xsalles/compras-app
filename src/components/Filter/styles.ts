import { COLORS } from "@/theme/colors";
import { IFilterProps } from "@/types/components/Filter";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerFilters: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        width: '100%',
        justifyContent: 'space-between'
    },
    filterUnselected: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        opacity: 0.5
    },
    filter: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        opacity: 1
    },
    textSelected: {
        color: COLORS.text.content,
        fontSize: 14,
        fontWeight: 600
    },
    text: {
        color: COLORS.text.muted,
        fontSize: 14,
    },
})