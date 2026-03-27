import { FilterStatus } from "@/types/components/Filter";
import { StatusIconProps } from "@/types/components/StatusIcon";
import { MaterialIcons } from "@expo/vector-icons";

export default function StatusIcon({
  statusSelected: _statusSelected,
  ownStatus,
  onChangeStatus
}: StatusIconProps) {
  const isBought = ownStatus === FilterStatus.BOUGHTS;

  const handleChangeStatus = () => {
    const nextStatus = isBought ? FilterStatus.PENDING : FilterStatus.BOUGHTS;
    onChangeStatus?.(nextStatus);
  };

  return (
    <MaterialIcons
      name={isBought ? "radio-button-checked" : "radio-button-unchecked"}
      size={24}
      onPress={onChangeStatus ? handleChangeStatus : undefined}
    />
  );
}
