export type LiquorColors = {
  apperol: string;
  brandy: string;
  campari: string;
  champagne: string;
  cointreau: string;
  darkrum: string;
  gin: string;
  kahlua: string;
  pisco: string;
  sweetvermouth: string;
  tequila: string;
  vodka: string;
  whiskey: string;
  whiterum: string;
};

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
