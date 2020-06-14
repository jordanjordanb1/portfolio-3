import React from 'react';
import { FlexDiv } from './RightSideNav.styles';
import Button from '@/shared/Button/Default/Default';
import IconButton from '@/shared/Button/IconButton/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Link from 'next/link'

const RightSideNav: React.SFC = (): JSX.Element => (
  <FlexDiv>
    <IconButton
      textColor="var(--almond)"
      edge="start"
      label="github"
      icon={<GitHubIcon color="inherit" fontSize="small" />}
    />
    <IconButton
      textColor="var(--almond)"
      label="linkedin"
      edge="start"
      icon={<LinkedInIcon color="inherit" />}
    />
    <IconButton
      textColor="var(--almond)"
      label="email"
      edge="start"
      icon={<MailOutlineIcon color="inherit" />}
    />

    <Button variant="outlined" href="/" prefetch={false}>
      RESUME
    </Button>
  </FlexDiv>
);

export default React.memo(RightSideNav);
