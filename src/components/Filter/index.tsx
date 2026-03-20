import { FilterStatus, IFilterProps } from "@/types/components/Filter";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import StatusIcon from "../StatusIcon";

export default function Filter({
  statusSelected,
  onPress,
  ...rest
}: IFilterProps) {
  return (
    <View style={styles.containerFilters}>
      <TouchableOpacity
        onPress={() => onPress(FilterStatus.PENDING)}
        style={
          statusSelected === FilterStatus.PENDING
            ? styles.filter
            : styles.filterUnselected
        }
      >
        <StatusIcon
          statusSelected={statusSelected}
          ownStatus={FilterStatus.PENDING}
        />
        <Text
          style={
            statusSelected === FilterStatus.PENDING
              ? styles.textSelected
              : styles.text
          }
        >
          Pendente
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={
          statusSelected === FilterStatus.BOUGHTS
            ? styles.filter
            : styles.filterUnselected
        }
        onPress={() => onPress(FilterStatus.BOUGHTS)}
      >
        <StatusIcon
          statusSelected={statusSelected}
          ownStatus={FilterStatus.BOUGHTS}
        />
        <Text
          style={
            statusSelected === FilterStatus.BOUGHTS
              ? styles.textSelected
              : styles.text
          }
        >
          Comprados
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onPress(FilterStatus.NONE)}>
        <Text style={styles.text}>Limpar</Text>
      </TouchableOpacity>
    </View>
  );
}
