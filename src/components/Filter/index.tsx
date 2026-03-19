import { FilterStatus, IFilterProps } from "@/types/components/Filter";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

export default function Filter({ statusSelected, onPress, ...rest }: IFilterProps) {
  return (
    <View style={styles.containerFilters}>
      <View
        style={
          statusSelected === FilterStatus.PENDING
            ? styles.filter
            : styles.filterUnselected
        }
      >
        <TouchableOpacity 
        onPress={() => onPress(FilterStatus.PENDING)}
        >
          <MaterialIcons
            name={
              statusSelected === FilterStatus.PENDING
                ? "radio-button-checked"
                : "radio-button-unchecked"
            }
            size={24}
          />
        </TouchableOpacity>
        <Text
          style={
            statusSelected === FilterStatus.PENDING
              ? styles.textSelected
              : styles.text
          }
        >
          Pendente
        </Text>
      </View>

      <View
        style={
          statusSelected === FilterStatus.BOUGHTS
            ? styles.filter
            : styles.filterUnselected
        }
      >
        <TouchableOpacity onPress={() => onPress(FilterStatus.BOUGHTS)}>
          <MaterialIcons
            name={
              statusSelected === FilterStatus.BOUGHTS
                ? "radio-button-checked"
                : "radio-button-unchecked"
            }
            size={24}
          />
        </TouchableOpacity>
        <Text
          style={
            statusSelected === FilterStatus.BOUGHTS
              ? styles.textSelected
              : styles.text
          }
        >
          Comprados
        </Text>
      </View>

      <TouchableOpacity  onPress={() => onPress(FilterStatus.NONE)}>
        <Text style={styles.text}>Limpar</Text>
      </TouchableOpacity>
    </View>
  );
}