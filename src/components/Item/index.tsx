import { Text, TouchableOpacity, View } from "react-native";
import StatusIcon from "@/components/StatusIcon";
import { MaterialIcons } from "@expo/vector-icons";
import { ItemProps } from "@/types/components/Item";
import { styles } from "./styles";

export default function Item({ ...props }: ItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <StatusIcon
          ownStatus={props.ownStatus}
          statusSelected={props.statusSelected}
        />
        <Text style={styles.nameItem}>{props.name}</Text>
      </View>
      <TouchableOpacity>
        <MaterialIcons name="delete" size={24} />
      </TouchableOpacity>
    </View>
  );
}
