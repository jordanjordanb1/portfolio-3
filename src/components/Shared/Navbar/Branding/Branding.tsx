import React from 'react';
import Link from 'next/link';
import { StyledTypography } from './Branding.style';

type Variants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type BrandingProps = {
  href: string;
  text: string;
  variant: Variants;
  handleClick?: (e: any) => void;
  analyticsTitle?: string;
};

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
