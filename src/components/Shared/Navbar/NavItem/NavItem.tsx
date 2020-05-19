import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { StyledTab } from './NavItem.style'

type NavItemProps = {
  href: string;
  text: string;
  handleClick?: (e: any) => void;
  analyticsTitle?: string;
};

/**
 * A link in the Navbar
 * @param {string} href
 * @param {string} text
 * @param {(e: any) => void} [handleClick]
 * @param {string} [analyticsTitle]
 */

const NavItem: React.SFC<NavItemProps> = ({ href, text, handleClick, analyticsTitle }) => {
  const router = useRouter();

  const isActive = () => {
    return router && router.pathname === href;
  };

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
        className={isActive() ? 'activeLink' : ''}
      />
    </Link>
  );
};

export default NavItem;
