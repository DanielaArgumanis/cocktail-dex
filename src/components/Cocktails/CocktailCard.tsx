import { useState } from "react";

// @Components
import Chip from '@commonComponents/Chip';
import CocktailModal from './CocktailModal';

// @MUI
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

// @Types
import { LiquorColors } from '@theme/Theme.types';
import { Cocktail } from 'types/Cocktail.types';

const CocktailCard = ({ cocktail }: { cocktail: Cocktail }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { name, liquorList, svgIcon } = cocktail;

  return (
    <Grid
      item
      lg={3}
      md={4}
      sm={6}
      xs={12}
      sx={{
        '& svg': {
          position: 'absolute',
          top: '-40px',
        },
        display: 'flex',
        justifyContent: 'center',
        marginTop: '60px',
        marginBottom: '40px',
        position: 'relative',
      }}
    >
      {svgIcon}
      <Card
        onClick={() => setIsOpen(true)}
        variant="outlined"
        sx={{
          borderRadius: '12px',
          width: '100%',
          boxShadow: 'rgba(0,0,0,0.25) 0 10px 10px',
        }}
      >
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography marginTop={6} variant="h6" fontWeight="bold">
            {name}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              justifyContent: 'center',
              marginY: 2,
              flexWrap: 'wrap',
            }}
          >
            {liquorList.map((liquor) => (
              <Chip
                key={liquor}
                label={liquor}
                chipColor={
                  liquor.replace(' ', '').toLowerCase() as keyof LiquorColors
                }
              />
            ))}
          </Box>
        </CardContent>
      </Card>
      <CocktailModal
        cocktail={cocktail}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </Grid>
  );
};

export default CocktailCard;
