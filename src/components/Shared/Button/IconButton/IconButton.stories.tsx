import React from 'react';
import IconButton from './IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

export default {
  component: IconButton,
  title: 'IconButton',
};

export const Icons = () => (
  <>
    <IconButton color="white" icon={<LinkedInIcon color="inherit" />} />
    <IconButton color="white" icon={<GitHubIcon color="inherit" />} />
    <IconButton color="white" icon={<MailOutlineIcon color="inherit" />} />
  </>
);
