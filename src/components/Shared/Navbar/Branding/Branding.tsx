import React from 'react';
import Link from 'next/link';
import { StyledTypography } from './Branding.style';
import { TypographyProps } from '@material-ui/core/Typography/Typography';

type Variants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface BrandingProps extends TypographyProps {
  children: string;
  href: string;
  variant: Variants;
  handleClick?: (e: any) => void;
  analyticsTitle?: string;
}

/**
 * @param {string} children
 * @param {string} href
 * @param {Variants} variant
 * @param {(e: any) => void} [handleClick]
 * @param {string} [analyticsTitle] - Title given to ga('send', 'event')
 */

const Branding: React.SFC<BrandingProps> = ({
  children,
  href,
  variant,
  handleClick,
  analyticsTitle,
  ...props
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
      {...props}
    >
      {children}
    </StyledTypography>
  </Link>
);

export default React.memo(Branding);
