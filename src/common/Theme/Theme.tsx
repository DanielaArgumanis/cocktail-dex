// @MUI
import { PaletteMode, createTheme } from "@mui/material";

const getTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode: mode,
      liquor: {
        apperol: '#FF9800',
        brandy: '#F48FB1',
        campari: '#e57373',
        champagne: '#FFE082',
        cointreau: '#ff7043',
        kahlua: '#BCAAA4',
        gin: '#81D4FA',
        pisco: '#8dbb85',
        sweetvermouth: '#CE93D8',
        tequila: '#80CBC4',
        vodka: '#c7d3d7',
        whiterum: '#9575CD',
        darkrum: '#66BB6A',
        whiskey: '#9FA8DA',
      },
      background: {
        default: mode === 'dark' ? '#13171B' : '#F8FAFB',
        paper: mode === 'dark' ? '#121212' : '#FFFFFF',
      },
    },
    typography: {
      fontFamily: ['Outfit', 'sans-serif'].join(','),
    },
  });


  export default getTheme;