// @Components
import Chip from '@commonComponents/Chip';

// @MUI
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Modal,
  Typography,
} from '@mui/material';

// @Types
import { LiquorColors } from '@theme/Theme.types';
import { Cocktail } from 'types/Cocktail.types';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  paddingY: 4,
  paddingX: 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '12px',
  outline: 'none',
};

const CocktailModal = ({
  isOpen,
  setIsOpen,
  cocktail,
}: {
  cocktail: Cocktail;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const { name, liquorList, svgIcon, ingredients, recipe } = cocktail;
  return (
    <Modal
      open={isOpen}
      onClick={(e) => e.stopPropagation()}
      onClose={() => setIsOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          ...style,
          border: '4px solid',
          borderColor: `liquor.${
            liquorList[0].replace(' ', '').toLowerCase() as keyof LiquorColors
          }`,
        }}
      >
        {svgIcon}
        <Typography
          id="modal-modal-title"
          variant="h6"
          color="text.primary"
          marginTop={4}
          fontWeight="bold"
        >
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
        <List dense disablePadding>
          {ingredients.map((ingredient) => (
            <ListItem disablePadding key={ingredient}>
              <ListItemText
                primary={ingredient}
                sx={{ color: 'text.primary', textAlign: 'center' }}
              />
            </ListItem>
          ))}
        </List>
        <Typography
          sx={{ mt: 2 }}
          variant="body2"
          textAlign="center"
          color="text.primary"
        >
          {recipe}
        </Typography>
      </Box>
    </Modal>
  );
};

export default CocktailModal;