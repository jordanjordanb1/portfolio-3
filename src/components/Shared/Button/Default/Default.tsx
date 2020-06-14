import React from 'react';
import Link from 'next/link';
import { StyledButton } from './Default.styles';
import { ButtonProps } from '@material-ui/core/Button/Button';

interface RoundedButtonProps extends ButtonProps {
  children: string | JSX.Element;
  href?: string;
  prefetch?: boolean;
  type?: 'button' | 'submit';
  rounded?: boolean;
}

/**
 * @param {string} children
 * @param {string} [href]
 * @param {boolean} [prefetch = true]
 * @param {'button' | 'submit'} [type = 'button']
 * @param {boolean} [rounded = true]
 */

const RoundedButton: React.SFC<RoundedButtonProps> = ({
  children,
  href,
  prefetch = true,
  type = 'button',
  rounded = true,
  ...props
}): JSX.Element => {
  const renderButton = () => (
    <StyledButton
      // @ts-ignore
      rounded={rounded ? 1 : 0}
      // @ts-ignore
      component={href ? 'a' : 'button'}
      type={type}
      role={type}
      {...props}
    >
      {children}
    </StyledButton>
  );

  if (href) {
    return (
      <Link href={href} prefetch={prefetch}>
        {renderButton()}
      </Link>
    );
  }

  return renderButton();
};

export default React.memo(RoundedButton);
