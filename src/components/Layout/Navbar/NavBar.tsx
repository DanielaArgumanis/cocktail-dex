
// @Icons
import { MoonIcon, SunIcon } from '@icons';
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase, ThemeIconButton } from './Navbar.styles';

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
            <ThemeIconButton aria-label="change theme">
                {colorMode === 'dark' && <SunIcon onClick={handleChangeTheme}/>}
                {colorMode === 'light' && <MoonIcon onClick={handleChangeTheme}/>}
            </ThemeIconButton>
          </Box>
    </Box>
  );
};

export default Navbar;
