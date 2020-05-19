import styled from 'styled-components/macro';
import Typography from '@material-ui/core/Typography';

export const StyledTypography = styled(Typography)`
  && {
    font-family: 'Concert One';
    color: var(--almond);
    transition: all 200ms ease-out;
    cursor: pointer;

    &:hover {
      color: var(--tuscany);
    }
  }
`;
