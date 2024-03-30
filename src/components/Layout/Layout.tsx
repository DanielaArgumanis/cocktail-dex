import { Box, PaletteMode, ThemeProvider } from "@mui/material";
import CocktailList from "../Cocktails/CocktailList";
import Navbar from "./Navbar/NavBar";
import { useState } from "react";
import getTheme from "@theme/Theme";

const Layout = () => {
    const [colorMode, setColorMode] = useState<PaletteMode>('dark');
    const theme = getTheme(colorMode);

    return  <ThemeProvider theme={theme}>
        <Box sx={{height: '100vh', width: '100vw', backgroundColor: 'background.default'}}>
        <Box sx={{margin: 'auto', maxWidth:'1536px', padding: {sm: 4, xs: 2}, width: '100%'}}>
            <Navbar colorMode={colorMode} handleUpdateColorMode={setColorMode}/>
            <CocktailList/>
        </Box>
    </Box>
    </ThemeProvider>
}

export default Layout;
