
import MuiChip, { ChipProps } from '@mui/material/Chip';
import { ChipOverrideProps } from './Chip.types';
import { styled } from '@mui/material';

const LiquorChip = (props: ChipProps) => (
    <MuiChip data-testid="DOT-chip" {...props}/>
  );
  
  const Chip = styled(LiquorChip)<ChipOverrideProps>(({ chipColor, theme }) => ({
    backgroundColor: theme.palette.liquor[chipColor],
    color: '#323232',
    fontWeight: 700
  }));
  
  export default Chip;
  