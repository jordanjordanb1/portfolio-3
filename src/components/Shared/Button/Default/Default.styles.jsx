import Button from '@material-ui/core/Button';
import styled from 'styled-components/macro';

export const StyledButton = styled(Button)`
  && {
    color: ${({ variant }) => (variant === 'contained' ? 'var(--eerie-black)' : 'var(--almond)')};
    ${({ variant }) => (variant === 'outlined' ? `border-color: var(--almond)` : `border: none`)};
    ${({ rounded }) => (!rounded ? `border-radius: 0px` : ``)};
    transition: all 150ms ease-in-out;

    :hover {
      background-color: var(--almond);
      color: var(--eerie-black);
      border-color: var(--almond);
    }
  }

  &&:disabled {
    color: var(--almond);
  }
`;
