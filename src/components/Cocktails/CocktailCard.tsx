import { useState } from "react";

// @Components
import Chip from "@theme/Chip";

// @MUI
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

// @Types
import { LiquorColors } from "@theme/Theme.types";
import CocktailModal from "./CocktailModal";
import { CocktailCardProps } from "./Cocktail.types";


const CocktailCard = (props: CocktailCardProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const { name, liquorList, svg: SvgIcon } = props;

    return <Grid item lg={3} md={4} sm={6} xs={12} sx={{
        display: 'flex', justifyContent: 'center', position: 'relative', marginTop: '50px', '& svg': {
            position: 'absolute',
            top: '-40px'
        }
    }}>
        <SvgIcon height={100} width={100} />
        <Card 
                onClick={() => setIsOpen(true)}
         variant="outlined" sx={{
            borderRadius: '12px', width: '100%',
            boxShadow: 'rgba(0,0,0,0.25) 0 10px 10px',
        }}>
            <CardContent sx={{ textAlign: 'center' }}>
                <Typography marginTop={8} variant="h6" fontWeight='bold'>{name}</Typography>
                <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', marginY: 2 }}>
                    {
                        liquorList.map((liquor) => <Chip key={liquor} label={liquor} chipColor={liquor.toLowerCase() as keyof LiquorColors} />)
                    }
                </Box>
            </CardContent>
        </Card>
        <CocktailModal {...props} isOpen={isOpen} setIsOpen={setIsOpen} />
    </Grid>
}

export default CocktailCard;
