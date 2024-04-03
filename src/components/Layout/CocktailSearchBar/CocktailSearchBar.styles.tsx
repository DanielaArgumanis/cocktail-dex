// @MUI
import { IconButton, InputBase, alpha, keyframes, styled } from "@mui/material";

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: alpha(theme.palette.background.paper, 0.5),
  },
  marginRight: theme.spacing(4),
  marginLeft: 0,
  width: '50%',
  boxShadow: 'rgba(0,0,0,0.25) 0 10px 10px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    marginRight: theme.spacing(1),
  },
}));
  
  export  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  export  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    width: '100%',
    color: 'inherit',
    '& .MuiInputBase-input': {
      color: theme.palette.text.primary,
      marginTop: theme.spacing(0.5),
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
    },
  }));
  

  const animateMoon = keyframes`
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const rotateSun = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

  export const ThemeIconButton = styled(IconButton)`

  :focus, :focus-visible {
    outline: none;
  }

  :hover {
    svg {
      &.sun-icon {
        animation: ${rotateSun} 1.5s linear infinite;
      }
      .moon-star1 {
        animation: ${animateMoon} 1s linear infinite;
      }
      .moon-star2 {
        animation: ${animateMoon} 1s linear infinite reverse;
      }
    }
  }

  svg {
    height: 30px;
    width: 30px;
  }
`