import React from 'react';
import {
  default as MaterialIconButton,
  IconButtonProps as IBProps,
} from '@material-ui/core/IconButton';

type IconButtonProps = {
  icon: any;
  textColor: string;
  label?: string;
};

export const IconButton: React.FC<IconButtonProps & IBProps> = ({
  icon,
  textColor,
  label = '',
  ...props
}): JSX.Element => {
  return (
    <MaterialIconButton style={{ color: textColor }} aria-label={label} {...props}>
      {icon}
    </MaterialIconButton>
  );
};

export default React.memo(IconButton);
