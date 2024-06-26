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
    const [filteredCocktailList, setFilteredCocktailList] = useState<Cocktail[]>([]);
    const theme = getTheme(colorMode);
    const dbRef = ref(getDatabase());

    
  const handleUpdateColorMode = () => {
    const newColorMode = colorMode === 'light' ? 'dark' : 'light';
    setColorMode(newColorMode);
    localStorage.setItem('theme', newColorMode);
  };

  useEffect(() => {
    const mode = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (mode) {
      setColorMode(mode);
    }
    get(child(dbRef, '/cocktailList'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const formattedCocktailList = formatCocktailList(snapshot.val());
          setCocktailList(formattedCocktailList);
          setFilteredCocktailList(formattedCocktailList);
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleInputChange = (input: string) => {
    const newFilteredList = cocktailList.filter((cocktail) => {
      if (cocktail.name.toLowerCase().includes(input.toLowerCase())) {
        return true;
      }
      return cocktail.liquorList.some((liquor) =>
        liquor.toLowerCase().includes(input.toLowerCase()),
      );
    });
    setFilteredCocktailList(newFilteredList);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          width: '100vw',
          backgroundColor: 'background.default',
        }}
      >
        <Box
          sx={{
            margin: 'auto',
            maxWidth: '1300px',
            padding: { sm: 4, xs: 2 },
            width: '100%',
          }}
        >
          <CocktailSearchBar
            colorMode={colorMode}
            handleUpdateColorMode={handleUpdateColorMode}
            handleInputChange={handleInputChange}
          />
          <CocktailList cocktailList={filteredCocktailList} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Layout;
