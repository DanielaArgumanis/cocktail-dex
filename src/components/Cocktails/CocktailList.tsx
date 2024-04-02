// @Components
import CocktailCard from "./CocktailCard";

// @MUI 
import { Grid } from "@mui/material";
import { Cocktail } from "types/Cocktail.types";

const CocktailList = ({cocktailList}: {cocktailList: Cocktail[]}) => {
    return <Grid container spacing={3} sx={{marginY: 4}}>
        {cocktailList.map((cocktail)=> <CocktailCard cocktail={cocktail} key={cocktail.name}/>)}
    </Grid>
}

export default CocktailList;
