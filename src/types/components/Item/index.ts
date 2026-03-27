import { StatusIconProps } from "../StatusIcon";

export type ItemProps = StatusIconProps & {
    id: number;
    name: string;
    onRemove?: (id: number) => void;
}