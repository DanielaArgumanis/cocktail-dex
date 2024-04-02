import { useEffect, useState } from "react";

// @Components
import CocktailList from "../Cocktails/CocktailList";
import CocktailSearchBar from "./CocktailSearchBar/CocktailSearchBar";

// @MUI
import { Box, PaletteMode, ThemeProvider } from "@mui/material";

// @Theme
import getTheme from "@theme/Theme";
import { child, get, getDatabase, ref } from "firebase/database";

// @Types
import { Cocktail } from "types/Cocktail.types";

// @Utils
import { formatCocktailList } from "@utils/CocktailHelpers";

const Layout = () => {
    const [colorMode, setColorMode] = useState<PaletteMode>('dark');
    const [cocktailList, setCocktailList] = useState<Cocktail[]>([]);
    const theme = getTheme(colorMode);
    const dbRef = ref(getDatabase());

    useEffect(()=> {
        get(child(dbRef, '/cocktailList')).then((snapshot) => {
        if (snapshot.exists()) {
            setCocktailList(formatCocktailList(snapshot.val()))
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        console.error(error);
        });
    }, [])

    return  <ThemeProvider theme={theme}>
        <Box sx={{height: '100vh', width: '100vw', backgroundColor: 'background.default'}}>
        <Box sx={{margin: 'auto', maxWidth:'1536px', padding: {sm: 4, xs: 2}, width: '100%'}}>
            <CocktailSearchBar colorMode={colorMode} handleUpdateColorMode={setColorMode}/>
            <CocktailList cocktailList={cocktailList}/>
        </Box>
    </Box>
    </ThemeProvider>
}

export default Layout;
