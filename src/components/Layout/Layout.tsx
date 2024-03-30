import { Box } from "@mui/material";
import CocktailList from "../Cocktails/CocktailList";

const Layout = () => {
    return <Box sx={{height: '100vh', width: '100vw'}}>
        <Box sx={{margin: 'auto', maxWidth:'1024px', paddingY: 4, width: '100%'}}>
            <CocktailList/>
        </Box>
    </Box>
}

export default Layout;
