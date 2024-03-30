import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import Chip from "@theme/Chip";
import { LiquorColors } from "@theme/Theme.types";
import React from "react";

type CocktailCardProps = {
    name: string;
    liquorList: string[];
    svg: React.ReactNode;
}

const CocktailCard = ({name, liquorList, svg}: CocktailCardProps) => {
    return  <Grid item lg={3} md={4} sm={6} xs={12} sx={{display: 'flex', justifyContent: 'center', position:'relative',  marginTop: '50px', '& svg': {
        position: 'absolute',
        top: '-40px'
    }}}>
    {svg}
        <Card variant="outlined" sx={{borderRadius: '12px', width: '100%', 
    boxShadow: 'rgba(0,0,0,0.25) 0 10px 10px',}}> 
    <CardContent sx={{textAlign: 'center'}}>
        <Typography marginTop={8}>{name}</Typography>
        <Box sx={{display: 'flex', gap: 1, justifyContent: 'center', marginY: 2}}>
            {
                liquorList.map((liquor)=> <Chip label={liquor} chipColor={liquor.toLowerCase() as keyof LiquorColors}/>)
            }
        </Box>
    </CardContent>
    </Card>
    </Grid>
}

export default CocktailCard;
