import React from 'react';
import Link from 'next/link';
import styled from 'styled-components/macro';
import Tab from '@material-ui/core/Tab';
import { useRouter } from 'next/router';

type NavItemProps = {
  href: string;
  text: string;
  handleClick?: (e: any) => void;
  analyticsTitle?: string;
};

const StyledTab = styled(Tab)`
  && {
    min-width: 50px;
    color: var(--almond);
    transition: all 200ms ease-out;
    font-family: 'Ubuntu';
    cursor: pointer;
    font-size: 1em;
    margin: 0 5px;

    &.activeLink {
      background: var(--almond);
      color: var(--eerie-black);
      cursor: default;

      &:hover {
        background: var(--almond);
        color: var(--eerie-black);
      }
    }

    &:hover {
      color: var(--tuscany);
    }
  }
`;

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
