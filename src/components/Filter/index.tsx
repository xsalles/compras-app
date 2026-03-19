import { FilterStatus, IFilterProps } from "@/types/components/Filter";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

export default function Filter({ statusSelected, onPress, ...rest }: IFilterProps) {
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
          <MaterialIcons
            name={
              statusSelected === FilterStatus.PENDING
                ? "radio-button-checked"
                : "radio-button-unchecked"
            }
            size={24}
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
          <MaterialIcons
            name={
              statusSelected === FilterStatus.BOUGHTS
                ? "radio-button-checked"
                : "radio-button-unchecked"
            }
            size={24}
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

      <TouchableOpacity  onPress={() => onPress(FilterStatus.NONE)}>
        <Text style={styles.text}>Limpar</Text>
      </TouchableOpacity>
    </View>
  );
}