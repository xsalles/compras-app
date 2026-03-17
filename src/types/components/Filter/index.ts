import { TouchableOpacityProps } from "react-native";

export enum FilterStatus {
    PENDING = 'Pendente',
    BOUGHTS = 'Comprados',
}

export type IFilterProps = Omit<TouchableOpacityProps, 'onPress'> &{
    statusSelected: FilterStatus;
    onPress: (status: FilterStatus) => void;
}