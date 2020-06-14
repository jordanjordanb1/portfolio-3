import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { StyledTab } from './NavItem.style';
import { TabProps } from '@material-ui/core/Tab/Tab';

interface NavItemProps extends TabProps {
  href: string;
  text: string;
  handleClick?: (e: any) => void;
  analyticsTitle?: string;
}

const NavItem: React.SFC<NavItemProps> = ({
  href,
  text,
  handleClick,
  analyticsTitle,
  ...props
}): JSX.Element => {
  const router = useRouter();

  const isActive = router?.pathname === href;

  return (
    <Link href={href}>
      <StyledTab
        // @ts-ignore
        component={'a'}
        disableFocusRipple
        color="initial"
        underline="none"
        disableRipple
        label={text}
        onClick={handleClick}
        data-title={analyticsTitle}
        className={isActive ? 'activeLink' : ''}
        {...props}
      />
    </Link>
  );
};

export default React.memo(NavItem);
