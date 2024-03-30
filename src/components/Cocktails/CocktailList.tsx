import { Grid } from "@mui/material";
import CocktailCard from "./CocktailCard";
import { CosmopolitanIcon, GinTonicIcon, NegroniIcon, PinaColada } from "@icons";

const cocktails = [
    {
        name: 'Negroni',
        liquorList: ['Gin', 'Vermouth', 'Campari'],
        svg: <NegroniIcon height={100} width={100}/>
    },
    {
        name: 'Cosmopolitan',
        liquorList: ['Vodka', 'Cointreau'],
        svg: <CosmopolitanIcon height={100} width={100}/>
    },
    {
        name: 'Gin Tonic',
        liquorList: ['Gin'],
        svg: <GinTonicIcon height={100} width={100}/>
    },
    {
        name: 'Piña Colada',
        liquorList: ['Rum'],
        svg: <PinaColada height={100} width={100}/>
    },
]

const CocktailList = () => {
    return <Grid container spacing={3}>
        {cocktails.map((cocktail)=> <CocktailCard {...cocktail}/>)}
    </Grid>
}

export default CocktailList;