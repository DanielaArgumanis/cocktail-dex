// @MUI
import { Box, List, ListItem, ListItemText, Modal, Typography } from "@mui/material"

// @Types
import { CocktailCardProps } from "./Cocktail.types";
import { LiquorColors } from "@theme/Theme.types";
import Chip from "@theme/Chip";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    paddingY: 4,
    paddingX: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    borderRadius: '12px'
  };

const CocktailModal = ({name, liquorList, svg: SvgIcon, isOpen, setIsOpen, recipe, ingredients}: CocktailCardProps & {isOpen: boolean, setIsOpen: (isOpen: boolean)=> void}) => {
    return  <Modal
        open={isOpen}
        onClick={(e) => e.stopPropagation()} 
        onClose={()=>setIsOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={{...style, borderColor: `liquor.${liquorList[0].toLowerCase() as keyof LiquorColors}`}}>
            <SvgIcon height={100} width={100}/>
            <Typography id="modal-modal-title" variant="h6" color="text.primary">
            {name}
            </Typography>
            
        <Box sx={{display: 'flex', gap: 1, justifyContent: 'center', marginY: 2}}>
            {
                liquorList.map((liquor)=> <Chip key={liquor} label={liquor} chipColor={liquor.toLowerCase() as keyof LiquorColors}/>)
            }
            </Box>
            <List dense disablePadding>
            {
                ingredients.map((ingredient)=> 
                <ListItem disablePadding>
                    <ListItemText
                    primary={ingredient}
                    sx={{color: 'text.primary', textAlign: 'center'}}
                    />
              </ListItem>)
            }
            </List>
        <Typography sx={{ mt: 2 }} variant="body2" textAlign='center' color="text.primary">
       {recipe}
        </Typography>
    </Box>
        </Modal>
}

export default CocktailModal;