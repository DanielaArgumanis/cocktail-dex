import { PaletteMode, createTheme } from "@mui/material";

const getTheme = (mode: PaletteMode) => createTheme({
  palette: {
  mode: mode,
  liquor: {
    gin: '#42a5f5',
    rum: '#BCAAA4',
    campari: '#e57373',
    vermouth: '#CE93D8',
    vodka: '#BDBDBD',
    cointreau: '#ff7043',
  },
  background: {
    default: mode === 'dark' ? '#13171B' : '#F8FAFB',
    paper: mode === 'dark' ? '#121212' : '#FFFFFF',
  }
},
typography: {
  fontFamily: ['Outfit', 'sans-serif'].join(',')
}
});


  export default getTheme;