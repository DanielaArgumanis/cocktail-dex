import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
  mode: 'dark',
  liquor: {
    gin: '#42a5f5',
    rum: '#BCAAA4',
    campari: '#e57373',
    vermouth: '#CE93D8',
    vodka: '#BDBDBD',
    cointreau: '#ff7043',
  }
},
typography: {
  fontFamily: ['Outfit', 'sans-serif'].join(',')
}
});


  export default theme;