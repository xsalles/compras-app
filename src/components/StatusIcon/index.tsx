import { StatusIconProps } from "@/types/components/StatusIcon";
import { MaterialIcons } from "@expo/vector-icons";

export default function StatusIcon({
  statusSelected,
  ownStatus,
}: 
   StatusIconProps
) {
    const isSelected = statusSelected === ownStatus && ownStatus !== "Nenhum";

  return  (
    <MaterialIcons name={isSelected ? "radio-button-checked" : "radio-button-unchecked"} size={24} />
  )
}
