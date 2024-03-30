/* eslint-disable @typescript-eslint/no-unused-vars */

import { Palette } from '@mui/material/styles';
import { ChipPropsColorOverrides } from '@mui/material/Chip';


export type LiquorColors = {
    gin: string;
    rum: string,
    campari: string,
    vermouth: string,
    vodka: string,
    cointreau: string,
}

declare module '@mui/material/styles' {
    interface Palette {
        liquor: LiquorColors;
    }

    interface PaletteOptions {
        liquor?: LiquorColors;
    }
}

declare module '@mui/material/Chip' {
    interface ChipPropsColorOverrides {
        liquor: {
            gin: true;
          };
    }
  }
