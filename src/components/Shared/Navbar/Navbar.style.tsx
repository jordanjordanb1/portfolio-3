import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import styled from 'styled-components/macro';

export const StyledTabs = styled(Tabs)`
  && {
    margin-left: 40px;
    flex-grow: 1;
  }
`;

export const StyledToolbar = styled(Toolbar)`
  && {
    @media (min-width: 600px) {
      min-height: fit-content;
    }
  }
`;
