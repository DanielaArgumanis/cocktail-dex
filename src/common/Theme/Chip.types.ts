import { ChipProps } from "@mui/material";
import { LiquorColors } from "./Theme.types";

export type ChipOverrideProps = Omit<
  ChipProps, 'color'
> & {
  chipColor: keyof LiquorColors;
}
