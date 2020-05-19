import React from 'react';
import { FlexDiv } from './RightSideNav.styles';
import Button from '@/shared/Button/Default/Default';

const RightSideNav: React.SFC = () => {
  return (
    <FlexDiv>
      <Button href="/" prefetch={false}>
        RESUME
      </Button>
    </FlexDiv>
  );
};

export default React.memo(RightSideNav);
