import React from 'react';
import Link from 'next/link';
import styled from 'styled-components/macro';
import Typography from '@material-ui/core/Typography';

type Variants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type BrandingProps = {
  href: string;
  text: string;
  variant: Variants;
  handleClick?: (e: any) => void;
  analyticsTitle?: string;
};

const StyledTypography = styled(Typography)`
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

/**
 * @param {string} href
 * @param {text} text
 * @param {Variants} variant
 * @param {(e: any) => void} [handleClick]
 * @param {string} [analyticsTitle] - Title given to ga('send', 'event')
 */

const Branding: React.SFC<BrandingProps> = ({
  href,
  text,
  variant,
  handleClick,
  analyticsTitle,
}) => (
  <Link href={href}>
    <StyledTypography
      variant={variant}
      // @ts-ignore
      component={'a'}
      // @ts-ignore
      onClick={handleClick}
      data-title={analyticsTitle}
      color="inherit"
    >
      {text}
    </StyledTypography>
  </Link>
);

export default Branding;
