// @Components
import CocktailCard from "./CocktailCard";

// @Icons
import { CosmopolitanIcon, GinTonicIcon, NegroniIcon, PinaColadaIcon } from "@icons";

// @MUI 
import { Grid } from "@mui/material";

const cocktails = [
    {
        name: 'Negroni',
        liquorList: ['Campari', 'Vermouth',  'Gin'],
        svg: NegroniIcon,
        recipe: 'Stir the ingredients in a glass with ice. Use orange peel as garnish.',
        ingredients: [
            '1 oz gin',
            '1 oz campari',
            '1 oz sweet vermouth',
            'Orange peel'
        ]
    },
    {
        name: 'Cosmopolitan',
        liquorList: ['Cointreau', 'Vodka'],
        svg: CosmopolitanIcon,
        recipe: 'Place ingredients in a shaker and shake with ice for 10 seconds. Strain into a chilled cocktail glass. Use orange peel as garnish.',
        ingredients: ['2 oz vodka', '2 oz cointreau', '1/2 oz lemon juice', '1 oz cranberry juice', 'Orange peel']
    },
    {
        name: 'Gin Tonic',
        liquorList: ['Gin'],
        svg: GinTonicIcon,
        recipe: '',
        ingredients: []
    },
    {
        name: 'Piña Colada',
        liquorList: ['Rum'],
        svg: PinaColadaIcon,
        recipe: '',
        ingredients: []
    },
]

const CocktailList = () => {
    return <Grid container spacing={3} sx={{marginY: 4}}>
        {cocktails.map((cocktail)=> <CocktailCard {...cocktail} key={cocktail.name}/>)}
    </Grid>
}

export default CocktailList;