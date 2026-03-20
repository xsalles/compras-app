import { FilterStatus } from "@/types/components/Filter";
import { StatusIconProps } from "@/types/components/StatusIcon";
import { MaterialIcons } from "@expo/vector-icons";

export default function StatusIcon({
  statusSelected,
  ownStatus,
}: StatusIconProps) {
  const isSelected = statusSelected === FilterStatus.BOUGHTS;

  return (
    <MaterialIcons
      name={isSelected && ownStatus === FilterStatus.BOUGHTS ? "radio-button-checked" : "radio-button-unchecked"}
      size={24}
    />
  );
}
