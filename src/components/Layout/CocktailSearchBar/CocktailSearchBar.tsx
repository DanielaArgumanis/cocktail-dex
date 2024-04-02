
// @Icons
import { MoonIcon, SunIcon } from '@icons';

// @MUI
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// @Styles
import { Search, SearchIconWrapper, StyledInputBase, ThemeIconButton } from './CocktailSearchBar.styles';

type NavbarProps = {
  colorMode: 'light' | 'dark';
  handleUpdateColorMode: (colorMode: 'light' | 'dark') => void;
};

const Navbar = ({ colorMode, handleUpdateColorMode }: NavbarProps) => {
  const handleChangeTheme = () => {
    handleUpdateColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  return (
    <Box sx={{ display: 'flex', marginY: 2 }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon color='action'/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search cocktails..."
              inputProps={{ 'aria-label': 'search cocktails' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex' }}>
            <ThemeIconButton aria-label="change theme" onClick={handleChangeTheme}>
                {colorMode === 'dark' ? <SunIcon /> : <MoonIcon/>}
            </ThemeIconButton>
          </Box>
    </Box>
  );
};

export default Navbar;
