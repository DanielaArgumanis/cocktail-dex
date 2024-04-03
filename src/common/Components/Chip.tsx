// @Components
import MuiChip from '@mui/material/Chip';

// @MUI
import { styled } from '@mui/material';

// @Types
import { ChipOverrideProps } from '@theme/Chip.types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LiquorChip = ({ chipColor, ...props }: ChipOverrideProps) => (
  <MuiChip data-testid="DOT-chip" {...props} />
);

const Chip = styled(LiquorChip)<ChipOverrideProps>(({ chipColor, theme }) => ({
  backgroundColor: theme.palette.liquor[chipColor],
  color: '#323232',
  fontWeight: 700,
  borderRadius: '8px',
  height: '28px',
  '& span': {
    padding: '8px',
  },
}));

export default Chip;
